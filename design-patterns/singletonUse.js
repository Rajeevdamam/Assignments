import singleTon from "./singletonDP.js";

export default function printLog() {
	singleTon.size();
	singleTon.add("hello");
	singleTon.size();
}
