
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	useHistory,
	Switch,
	Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Modal from "./HOC/Modal/Modal";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import JiraCyberBug from "./pages/CyberBugs/JiraCyberBug/JiraCyberBug";
import LoginCyberBugs from "./pages/CyberBugs/LoginCyberBugs/LoginCyberBugs";
import DemoHOCModal from "./pages/DemoHOCModal/DemoHOCModal";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ToDoListRCC from "./pages/ToDoListAxios/ToDoListRCC";
import ToDoListRFC from "./pages/ToDoListAxios/ToDoListRFC";
import ToDoListSaga from "./pages/ToDoListSaga/ToDoListSaga";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import UserLoginTemplate from './templates/HomeTemplate/UserLoginTemplate';
import { CyberBugTemplate } from "./templates/HomeTemplate/CyberBugTemplate";
import CreateProjectJira from "./pages/CyberBugs/CreateProjectJira/CreateProjectJira";




function App() {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		// console.log(history);
		dispatch({type:'ADD_HISTORY',history:history});
		
	}, [dispatch,history]);
	return (
		<>
			<div className="">
				<Modal />
				{/* <Header/> */}
				<Switch>
					{/* <Route exact path="/" render={(propsRoute)=>{
						// custom lai dang template cho page
						return (
							<div>
								<Header/>
								<Home {...propsRoute}/>
							</div>
						)
					}} /> */}
					<HomeTemplate path="/" exact Component={Home} />
					<HomeTemplate path="/about" exact Component={About} />

					<Route exact path="/contact" component={Contact} />
					<UserLoginTemplate exact path="/login" Component={LoginCyberBugs} />
					<Route exact path="/detail/:id" component={Home} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/todoListRcc" component={ToDoListRCC} />
					<Route exact path="/todoListRfc" component={ToDoListRFC} />
					<Route exact path="/todoListSaga" component={ToDoListSaga} />
					<Route exact path="/demoHOC" component={DemoHOCModal} />
					<CyberBugTemplate exact path="/cyberbugs" Component={JiraCyberBug}/>
					<CyberBugTemplate exact path="/cyberbugs/create" Component={CreateProjectJira}/>
					{/* khi nguoi dung go lung tung se chuyen qua trang notFound */}
					<Route exact path="*" component={Home} />
				</Switch>
			</div>
		</>

	);
}

export default App;
