import axios from "axios";

const getPostDetails = async () => {
	let res = await axios.get("http://localhost:5000/api/posts");
	return { type: "SHOW_POSTS", payload: res.data };
};

export default getPostDetails;
