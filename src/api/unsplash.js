import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID J7MOumDPpwbl4AOv2bBCgVkmCnS0uzCZ1LnRH6Tzk-g'
	}

});