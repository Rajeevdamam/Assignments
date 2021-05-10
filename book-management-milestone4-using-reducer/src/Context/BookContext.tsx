import React, { createContext, useReducer } from "react";
import reducer from "../reducers/reducer";

interface Props {
	children?: any;
}

export const BookContext = createContext<any>({});

const BookContextProvider = (props: Props) => {
	const [state, dispatch] = useReducer(reducer, {}, () => {
		return {
			books: [
				{
					_id: "5f4fd116c277b45acc698bce",
					title: "The Accursed God",
					author: "Vivek Dutta Mishra",
					price: "199",
					rating: "4.9",
					description:
						"THE LOST EPIC ============ The story of the epic battle of Kurukshetra has been told and retold for ages. ",

					series: "The Lost Epic",

					cover:
						"http://thelostepic.com/wp-content/uploads/2021/04/THE-ACCURSED-GOD-Front-780x1100-1.jpg",
				},
				{
					_id: "5f4fb1e86980a8fb2b76e84b",
					title: "Harry Potter and the Philosopher's Stone",
					author: "JK Rowling",
					price: "340",
					rating: "4.7",
					description:
						"Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series.",

					series: "Harry Potter",

					cover:
						"https://static.wikia.nocookie.net/warner-bros-entertainment/images/0/0e/Philostone.jpg/revision/latest?cb=20160307194850",
				},
				{
					_id: "5f4fb4e66980a8fb2b76e84c",
					title: "Harry Potter and theHarry Potter and the Chamber of Secrets ",
					author: "JK Rowling",
					price: "259",
					rating: "4.7",
					description:
						"Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car!",

					series: "Harry Potter",

					cover:
						"https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg",
				},
				{
					_id: "5f4fb5fc6980a8fb2b76e84d",
					title: "Harry Potter and the Prisoner of Azkaban ",
					author: "JK Rowling",
					price: "400",
					rating: "4.6",
					description:
						"Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. ",

					series: "Harry Potter",

					cover:
						"https://kbimages1-a.akamaihd.net/69eca8ca-652c-4641-b86f-42de460a6d4d/1200/1200/False/harry-potter-and-the-prisoner-of-azkaban-6.jpg",
				},
				{
					_id: "5f4fb70f6980a8fb2b76e84e",
					title: "Harry Potter and the Goblet of Fire",
					author: "JK Rowling",
					price: "450",
					rating: "4.7",
					description:
						"Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series.",

					series: "Harry Potter",

					cover:
						"https://cdn11.bigcommerce.com/s-z7qq7adctg/images/stencil/500x659/products/674092/774560/btcl__84587.1522183285.jpg?c=2",
				},
				{
					_id: "5f4fb7b36980a8fb2b76e84f",
					title: "Harry Potter and the Order of the Phoenix",
					author: "JK Rowling",
					price: "509",
					rating: "4.7",
					description: "",

					series: "Harry Potter",

					cover:
						"https://static.wikia.nocookie.net/harrypotter/images/3/31/Order_of_the_Phoenix_New_Cover.jpg/revision/latest?cb=20170109054726",
				},
				{
					_id: "5f4fb89d6980a8fb2b76e850",
					title: "Harry Potter and the Half Blood Prince",
					author: "JK Rowling",
					price: "400",
					rating: "4.7",
					description: "",

					series: "Harry Potter",

					cover:
						"https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg",
				},
				{
					_id: "5f4fb9596980a8fb2b76e851",
					title: "Harry Potter and the Deathly Hallows",
					author: "JK Rowling",
					price: "550",
					rating: "4.7",
					description:
						"Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series.",

					series: "Harry Potter",

					cover:
						"https://images-na.ssl-images-amazon.com/images/I/811t1pfIZXL.jpg",
				},
				{
					_id: "5f4fbb7d6980a8fb2b76e852",
					title: "Kane and Abel",
					author: "Jeffrey Archer",
					price: "199",
					rating: "4.1",
					description:
						"They had only one thing in common . . . William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. ",
					series: "",

					cover:
						"https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg",
				},
				{
					_id: "5f4fbd356980a8fb2b76e853",
					title: "The Count of Monte Cristo",
					author: "Alexandre Dumas",
					price: "350",
					rating: "4.5",
					description:
						"The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844.",
					series: "",

					cover:
						"https://images-na.ssl-images-amazon.com/images/I/61qF6xsWq3L.jpg",
				},
				{
					_id: "5f4fbe4c6980a8fb2b76e854",
					title: "Five Little Pigs",
					author: "Agatha Christie",
					price: "180",
					rating: "4.6",
					description:
						"The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by French author Alexandre Dumas (père) completed in 1844. ",

					series: "Hercule Poirot",

					cover:
						"https://kbimages1-a.akamaihd.net/d54608a2-1499-47eb-bd78-e96b384c49e5/1200/1200/False/five-little-pigs.jpg",
				},
				{
					_id: "5f4fc0396980a8fb2b76e855",
					title: "Half Girl Friend",
					author: "Chetan Bhagat",
					price: "180",
					rating: "3.2",
					description:
						"Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat.",

					series: "",

					cover:
						"https://images-na.ssl-images-amazon.com/images/I/712HEn9SNwL.jpg",
				},
			],
			users: [],
			status: false,
		};
	});

	return (
		<BookContext.Provider value={{ state, dispatch }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
