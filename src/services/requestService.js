const jsonfile = require('jsonfile');
const { v4: uuidv4 } = require('uuid');
const Queue = require('../models/Queue');

const REQUESTS_FILE = './src/data/requests.json';

class RequestService {
    constructor() {
        this.requestQueue = new Queue();
        this.loadRequests();
    }

    loadRequests() {
        try {
            const requests = jsonfile.readFileSync(REQUESTS_FILE);
            requests.forEach(request => this.requestQueue.enqueue(request));
        } catch (error) {
            console.error('Error loading requests:', error);
        }
    }

    async addRequest(studentId, bookId) {
        const request = {
            id: uuidv4(),
            studentId,
            bookId,
            timestamp: new Date().toISOString()
        };

        this.requestQueue.enqueue(request);
        
        try {
            const requests = await this.getAllRequests();
            requests.push(request);
            await jsonfile.writeFile(REQUESTS_FILE, requests);
            return request;
        } catch (error) {
            console.error('Error adding request:', error);
            throw error;
        }
    }

    processNextRequest() {
        return this.requestQueue.dequeue();
    }

    getAllRequests() {
        try {
            return jsonfile.readFileSync(REQUESTS_FILE);
        } catch (error) {
            console.error('Error getting requests:', error);
            return [];
        }
    }
}

module.exports = new RequestService();