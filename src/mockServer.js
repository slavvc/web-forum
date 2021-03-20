import {createServer} from 'miragejs'

import {makeTree} from './fakeData'

const tree = makeTree([1,5], [0,5], [0,7], [0,10])

createServer({
    routes(){
        this.get('/api/topic/:id', (_, req)=>({
            type: 'topic',
            data: tree.topics[req.params.id]
        }))
        this.get('/api/thread/:id', (_, req)=>({
            type: 'thread',
            data: tree.threads[req.params.id]
        }))
    }
})