import React from "react";
import { lazy } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

//main
import Main from "./views/main/Main";
import LogiMain from "./views/main/Login";
import Join from "./views/main/Join";
import MyPage from "./views/MyPage";
import Notice from "./views/Notice";
import Community from "./views/main/Community";

//play
import LoginPlay from "./views/play/Login";
import FullLayout from "./layouts/FullLayout";
import Starter from "./views/Starter";
import MyPageInfo from "./views/MyPageInfo";
import MyPageModify from "./views/MyPageModify";


const App = () => {

    return(
        <Routes>
            {/********* main *********/}
            <Route path="/" element = {<Main />} />
            <Route path="/login" element = {<LogiMain />} />
            <Route path="/join" element = {<Join />} />
            <Route path="/my" element = {<MyPage /> } >
                <Route path="" element = {<Navigate to="/my/info" />} />
                <Route path="/my/info" element = {<MyPageInfo />} />
                <Route path="/my/modify" element = {<MyPageModify />} />

            </Route>
            <Route path="/notice" element = {<Notice />} />
            <Route path="/community" element = {<Community />} />
            <Route path="/rank" element = {<Community />} />
            
            {/********* play *********/}
            <Route path="/play" element = {<FullLayout />}>
                <Route path="" element = { <Navigate to ="play/starter" />} />
                <Route path="starter" element = {<Starter />} />
            </Route>
            <Route path="play/login" element = {<LoginPlay />} />

        </Routes>

    );
    
};

export default App;