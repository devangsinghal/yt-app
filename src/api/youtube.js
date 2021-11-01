import axios from "axios";
const KEY = "AIzaSyDQSlAwSXuYq1zqQnNqtj47FFsphRgZpac";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxresults: 5,
		key: KEY,
	},
});
