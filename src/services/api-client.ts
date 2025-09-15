import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "c0a69a920f7844289d1f89446622cd19",
	},
});
