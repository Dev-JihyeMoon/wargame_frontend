import { Link } from "react-router-dom";
import {
    Button,
  } from "reactstrap";
import axios from 'axios';
import { useState, useEffect} from "react";


const MyPageInfo = () => {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        axios.get('bungae/post/1').then(function (response) {
            console.log(response.data)
            setList(response.data)
        }).catch(function(err){
            console.log(err)
        })
      },[]);

    return(
        <dev>
            <h2>
                INFO 임 로ㅏ?
            </h2>
            <Link to = "/my/modify">
                <Button className="btn" color="primary">
                    수정하기
                </Button>
            </Link>
        </dev>
    );
}

export default MyPageInfo;

