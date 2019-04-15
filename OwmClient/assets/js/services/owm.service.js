

function getCidades(){
    return axios.get(config.apiUrlDefault+"cidades", { withCredentials: false });
}

function getByName(name){
    return axios.get(config.apiUrl+"q="+name+"&appid="+config.token, { withCredentials: false });
}

function addCidade(obj){
    return axios.post(config.apiUrlDefault+"cidades", obj,{ withCredentials: false });
}

function getByForecast5(id){
    return axios.get(config.apiUrl+"id="+id+"&appid="+config.token, { withCredentials: false });
}