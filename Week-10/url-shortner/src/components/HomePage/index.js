import React, { useState } from 'react';
import axios from 'axios';
import { BsArrowRight } from 'react-icons/bs';
import './style.css';

function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [list, setList] = useState([]);
  const [copy, setCopy] = useState('Copy to clipboard');
  const [spinner, setSpinner] = useState(false)

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = async (e) => {
    setSpinner(true);
    e.preventDefault();
    axios.get(`https://api.shrtco.de/v2/shorten?url=${text}`).then((res) => {
      setResult(res.data.result.full_short_link);
      setList((prev) => [
        ...prev,
        {
          url: text,
          shortUrl: res.data.result.full_short_link,
        },
      ]);
      setSpinner(false);
    }).catch(err => { alert('Enter valid URL', err); setSpinner(false)});
    setText('');
  };

  const threeDots = (string) => {
    
      let text = string.slice(0, 50);
      text=text + ' . . . ';
      return text;
    
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopy('Copied to clipboard');
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="bannerText">URL shortner</div>
        {/* <div>https://postsrc.com/code-snippets/how-to-push-into-state-array-in-reactjs</div> */}
        <form onSubmit={(e) => submitHandler(e)} className="shortnerWrap">
          <input type="text" placeholder="Enter url here" value={text} onChange={(e) => changeHandler(e)} />
          <button className="button-30" onClick={(e) => submitHandler(e)}>
            Shorten
          </button>
        </form>
        {spinner?<div className='loader'>spinner</div>:null}
        <div className="resultWrap">
          {result ? (
            <div className="result">
              
                <div>{result}</div>
                <button className='button-30' onClick={() => copyToClipboard()}>{copy}</button>
              
            </div>
          ) : (
            <div></div>
          )}
        </div>
        
        {list.length ? <hr /> : null}
        <div className="listWrap">
          {list.length?<div className='recent'>Recentl URLs</div>:null}
          <br />
          {list.map((item, i) => (
            <div className="list">
              <div>
                {i + 1} . {threeDots(item.url)} 
              </div>
              <div><BsArrowRight/></div>
              <div className='shortOutput'> {item.shortUrl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
