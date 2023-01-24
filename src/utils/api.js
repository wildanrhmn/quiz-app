import axios from 'axios'


const api= (() => {

    async function getQuestions() {
        const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean"

        const response = await axios.get(url)

        return response.data.results
    }
    return {
        getQuestions,
  
    }
})()

export default api
