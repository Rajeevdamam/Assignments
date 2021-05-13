import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AddBook from "./components/addbook";
import Card from "./components/Card";
import { BookDetail } from "./components/bookDetail";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import BookContextProvider from "./Context/BookContext";
import CarouselComponent from "./components/CarouselComponent";
import FooterComponent from "./components/FooterComponent";
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

					<Switch>
						<Route exact path="/">
							<CarouselComponent />
							<Card searchParams={searchParams} />
							<FooterComponent />
						</Route>
						<Route exact path="/addbook">
							<AddBook />
						</Route>
						<Route exact path="/bookList">
							<CarouselComponent />
							<Card searchParams={searchParams} />
							<FooterComponent />
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
