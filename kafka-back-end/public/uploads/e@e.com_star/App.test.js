import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Route from './components/NewerHomePage';
import Welcome from './components/Welcome';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Recent from "./components/Recent";
import Starred from "./components/Starred";
import UserProfile from "./components/UserProfile";
import Message from "./components/Message";
import StarredFiles from "./components/StarredFiles";
import FileContainer from "./components/FileContainer";
import NewerHomePage from "./components/NewerHomePage";

describe('Dropbox front-end tests:',function() {
    it('should have two buttons', function () {
        const wrapper = shallow(<NewerHomePage/>);
        expect(wrapper.find('button')).to.have.length(1);
    });
    it('contains an <Login/> component', function () {
        const wrapper = mount(<NewerHomePage/>);
        expect(wrapper.find('Login')).to.have.length(1);
    });
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
    it('Application starts successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });

    it('Sign In page renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Login/>, div);
    });

    it('Sign Up page renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SignUp/>, div);
    });

    it('Left Panel component renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LeftPanel/>, div);
    });

    it('Right Panel component renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RightPanel/>, div);
    });

    it('Recent Header component renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Recent/>, div);
    });

    it('Starred Header component renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Starred/>, div);
    });

    it('Message component renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Message/>, div);
    });

    it('Starred Files component renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StarredFiles/>, div);
    });

    it('FileContainer component renders successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FileContainer/>, div);
    });


})