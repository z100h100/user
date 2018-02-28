import api from './getDataPack';
/*
 *api.fech argument
 * argument[0] :method
 * argument[1] :url
 * argument[2] :parmas
 * return response.data
 */
export default {
	//首页根据栏目编号获取商品栏目列表
	GetColumnList(params) {
		return api.fetch('post', '/apis/user/12345', {
			id: '9d4f5d74-6dd4-4927-a209-8c4c72599c57'
		});
	},
}