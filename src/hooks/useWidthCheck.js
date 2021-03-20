import {useState, useEffect} from 'react'

export default function(ref, widthThreshold){
    const [flag, setFlag] = useState(false)

    const checkWidth = ()=>{
        const width = ref.current?.offsetWidth
        if(width < widthThreshold){
            setFlag(true)
        }else{
            setFlag(false)
        }
    }
    
    useEffect(checkWidth, [ref])
    
    useEffect(()=>{
        addEventListener('resize', checkWidth)
        return ()=>{
            removeEventListener('resize', checkWidth)
        }
    })

    return flag
}
