import axiosService from "./axiosService";

const getRandomMeals = async () => {
    const requests = Array.from({ length: 12 }, async () =>
        await axiosService.get(`/random.php`).then(({ data }) => data.meals[0])
    );
    
    return Promise.all(requests);
} 

const searchMeals = async (keyword, letter) => {
    let res;

    if (keyword) {
        res = await axiosService.get(`/search.php?s=${keyword}`);
    } else if (letter) {
        res = await axiosService.get(`/search.php?f=${letter}`);
    } else {
        res = await axiosService.get('/search.php');
    }

    return res.data;
}

const filterMeals = async (ingredient) => {
    const {data: res} = await axiosService.get(`/filter.php?i=${ingredient}`);

    return res;
}

const getIngredients = async () => {
    const { data: res } = await axiosService.get('/list.php?i=list');

    return res;                           
}

const getMealDetails = async (id) => {
    const {data: res} = await axiosService.get(`/lookup.php?i=${id}`);

    return res.meals[0] || {};
}

const apiCallServices = {
    getRandomMeals,
    getIngredients,
    getMealDetails,
    filterMeals,
    searchMeals,
}

export default apiCallServices;