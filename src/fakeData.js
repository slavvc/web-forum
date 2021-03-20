// import {loremISpsum} from 'lorem-ipsum'
import madNews from 'mad-news'
import speechCode from 'speech-code'

function shuffle(arr){
    let copy = arr.slice()
    for(let i = 0; i < arr.length - 1; ++i){
        let j = Math.floor(Math.random()*(arr.length-i))+i
        let temp = copy[j]
        copy[j] = copy[i]
        copy[i] = temp
    }
    return copy
}


const newsTitles = [
    'Солженицын в Твери', 'Завод имени Свердлова',
    'Московский Метрострой', 'Первомайское княжество',
    'В администрации Среднеуральска', 
    'Соревнования по боксу', 'В зоопарке пополнение',
    'Музыкальная группа «Аюшка»', 'Детёныш кустарниковых кенгуру',
    'Рабочие мигранты — товарищи по классу', 'Чиновники — врачам',
    'Трудовые новости Центральной Азии', 'Моряки заперты на судах',
    'Коронавирус против профсоюзов'
]

export function genTopics(n){
    const shuffledTitles = shuffle(newsTitles)
    let res = []
    for(let i = 0; i < n; ++i){
        res.push({
            title: shuffledTitles[i % shuffledTitles.length],
            lastPost: '',
            numThreads: Math.floor(Math.random()*50)
        })
    }
    return res
}

export function genThreads(n){
    let res = []
    for(let i = 0; i < n; ++i){
        const madness = new madNews()
        const titleStr = [
            madness.person,
            madness.action
        ].join(' ').toLowerCase()
        const title = titleStr[0].toUpperCase() + titleStr.substring(1)
        res.push({
            title,
            isVegan: Math.random() < 0.5,
            lastPost: '',
            numPosts: Math.floor(Math.random()*50)
        })
    }
    return res
}

const alphaNames = [
    'Агав', 'Боян', 'Влас', 'Гуго', 'Деян',
    'Евод', 'Жюль', 'Зеэв', 'Иоад', 'Крив',
    'Лиам', 'Малх', 'Наум', 'Олаф', 'Псой',
    'Реас', 'Саид', 'Тейс', 'Ульф', 'Фекл',
    'Хира', 'Эдна', 'Юлий', 'Ясна'
]

export function genPosts(n){
    const names = shuffle(alphaNames)
    let res = []
    for(let i = 0; i < n; ++i){
        res.push({
            user: names[i % names.length],
            text: speechCode.getParagraph(
                Math.floor(Math.random()*3+1)
            )
        })
    }
    return res
}

function randint(a, b){
    return Math.floor(Math.random()*(b-a+1))+a
}


function makeTopicRecur(container, depth, boxedId, title, params){
    const {
        minDepth, maxDepth,
        minTopics, maxTopics,
        minThreads, maxThreads,
        minPosts, maxPosts
    } = params

    let currentTopic = {
        title
    }

    container.topics[boxedId.val] = currentTopic

    if(depth < maxDepth){
        let topics = genTopics(randint(minTopics, maxTopics))
        for(let i = 0; i < topics.length; ++i){
            const nextDepth = depth < minDepth
                ? depth + 1
                : depth + randint(1, 2)
            boxedId.val += 1
            topics[i].link = boxedId.val
            const nums = makeTopicRecur(
                container, nextDepth, 
                boxedId, topics[i].title, params
            )
            topics[i].numTopics = nums.numTopics
            topics[i].numThreads = nums.numThreads
        }
        currentTopic.topics = topics
    }else{
        currentTopic.topics = []
    }
    
    let threads = genThreads(randint(minThreads, maxThreads))
    for(let i = 0; i < threads.length; ++i){
        boxedId.val += 1
        threads[i].link = boxedId.val
        const posts = genPosts(randint(minPosts, maxPosts))
        threads[i].numPosts = posts.length
        container.threads[boxedId.val]= {
            posts,
            title: threads[i].title
        }
    }
    currentTopic.threads = threads
    return {
        numTopics: currentTopic.topics.length,
        numThreads: currentTopic.threads.length
    }
}

export function makeTree(depth, topics, threads, posts){
    let minDepth, maxDepth
    if(typeof(depth) == 'number'){
        minDepth = maxDepth = depth
    }else{
        [minDepth, maxDepth] = depth
    }

    let minTopics, maxTopics
    if(typeof(topics) == 'number'){
        minTopics = maxTopics = topics
    }else{
        [minTopics, maxTopics] = topics
    }

    let minThreads, maxThreads
    if(typeof(threads) == 'number'){
        minThreads = maxThreads = threads
    }else{
        [minThreads, maxThreads] = threads
    }

    let minPosts, maxPosts
    if(typeof(posts) == 'number'){
        minPosts = maxPosts = posts
    }else{
        [minPosts, maxPosts] = posts
    }

    let boxedId = {val: 0}

    let container = {
        topics: {},
        threads: {}
    }

    const params = {
        minDepth, maxDepth,
        minTopics, maxTopics,
        minThreads, maxThreads,
        minPosts, maxPosts
    }

    makeTopicRecur(container, 0, boxedId, undefined, params)

    return container
}