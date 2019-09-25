import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import About from './About'
import Footer from './Footer'
import Blog from './Blog'

class App extends Component{
  // state ={
  //   mdata : []
  // }
  // componentDidMount(){
  //   fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40saitejaplr7&api_key=wxf09olskksoanbe22asiolryh0xvn65gik16hqq')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({mdata : data})
  //   })
  // }
state = {
items: [
{
"title": "Types of Blockchains and right Blockchain for your business.",
"pubDate": "2019-04-05 17:36:11",
"link": "https://medium.com/@saitejaplr7/types-of-blockchains-and-right-blockchain-for-your-business-2ab4228003e5?source=rss-83aaef2ec683------2",
"guid": "https://medium.com/p/2ab4228003e5",
"author": "Saiteja Kuruva",
"thumbnail": "https://cdn-images-1.medium.com/max/940/1*-9IQofMlQoXbgdZi_DM2fg.png",
"description": "Types of Blockchains: Public Blockchain, Consortium/Federated, Blockchain Private Blockchain..."
},
{
"title": "What is Blockchain?",
"pubDate": "2019-03-19 08:07:43",
"link": "https://medium.com/@saitejaplr7/what-is-blockchain-454e4dffee6b?source=rss-83aaef2ec683------2",
"guid": "https://medium.com/p/454e4dffee6b",
"author": "Saiteja Kuruva",
"thumbnail": "https://cdn-images-1.medium.com/max/403/1*L60YdsGolSgGTnDcnH6sCA.png",
"description":"This is a public ledger of information stored across different nodes..."
}
]
}

  render(){
    return(
      <div>
 <Header />
 <About />
<Blog items={this.state.items} />
<Footer />

      </div>
    )
  }
}



export default App;
