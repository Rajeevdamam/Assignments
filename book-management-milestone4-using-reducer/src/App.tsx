import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import AddBook from "./components/addbook";
import Card from "./components/Card";
import { BookDetail } from "./components/bookDetail";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import BookContextProvider from "./Context/BookContext";
function App() {
	const [searchParams, setSearchParams] = useState({});
	const onSearch = (type: string, value: string) => {
		console.log(type, value);
		setSearchParams({ type, value });
	};

	return (
		<BookContextProvider>
			<Router>
				<div>
					<Header onsearch={onSearch} />
					<SideNav />
					<Switch>
						<Route exact path="/">
							<Card searchParams={searchParams} />
						</Route>
						<Route exact path="/addbook">
							<AddBook />
						</Route>
						<Route exact path="/bookList">
							<Card searchParams={searchParams} />
						</Route>
						<Route exact path="/bookDetail/:id">
							<BookDetail />
						</Route>
						<Route exact path="/login">
							<LoginPage />
						</Route>
						<Route exact path="/signup">
							<SignupPage />
						</Route>
					</Switch>
				</div>
			</Router>
		</BookContextProvider>
	);
}

export default App;
