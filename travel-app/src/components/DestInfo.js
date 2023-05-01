import React from 'react'
import {useState, useEffect} from 'react'
const DestInfo = () => {
    
const options = {
    method: 'GET', 
    headers:{
    'x-api-key': process.env.REACT_APP_API_KEY}
}
    const listUrl = 'https://syndication.api.eb.com/production/articles?articleTypeId=45&categoryId=7'
    const [destInfo, setDestInfo] = useState()
    const [disTrial, setDisTrial] = useState()
    const fetchListData = async () => {
        const res = await fetch(listUrl, options)
        if(!res){
            throw new Error('Broken Promise')
        } else{
            const data = res.json()
            console.log(data.articles)
            return data
             
        }
    }
    
   

    
    
    useEffect(() => {
        const findArticleId = (data, location) => {
            let filteredData = data.filter(el => el.title === location)
            return filteredData.articleId
        }
        fetchListData()
        .then((res) => {
            console.log(res)
            setDisTrial(findArticleId(res, 'new york city'))
        })
        const url = `https://syndication.api.eb.com/production/article/${disTrial}/xml`
        const fetchData = async () => {
            const res = await fetch(url, options)
            if(!res){
                throw new Error('Broken Promise')
            } else{
                return res.text()
            }
        }
        fetchData()
        .then((res) => {
            const xmlText = res
            setDestInfo(xmlText)
            console.log(xmlText)
        })
        .catch((e) => {
            console.log(e.message)
        })
       
    })

    
const XMLParser = (xml) => {
    const parser = new DOMParser()
    const xmlDocument = parser.parseFromString(xml, "application/xml");
    const dataNodes = xmlDocument.getElementsByTagName("article");
    const data = []
    
    for(let i = 0; i < dataNodes.length; i++){
      const node = dataNodes[i];
      const id = node.getAttribute("id");
      const title = node.getElementsByTagName("title")[0].textContent;
      const content = node.getElementsByTagName("p")[0].textContent;

      data.push({ id, title, content })
    }
    return data
}
    const parsedData = XMLParser(destInfo)

      return (
      <div>
        
        {parsedData.map(item => (
            <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            </div>
            ))}
             <h1>{disTrial}</h1> 
      </div>
      )
        
        }
    
    
    


export default DestInfo