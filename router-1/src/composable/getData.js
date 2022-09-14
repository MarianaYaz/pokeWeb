import axios from "axios";
import {ref} from "vue";
export const useGetData = () =>{
    //`https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    const data =ref(null)
    const error =ref(null)
    const loading = ref(true);
    const getData = async (url) =>{
        try{
            const res = await axios.get(url);
            data.value = res.data
        }catch(e){
            error.value = "Error de servidor"
            console.log(e)
        }finally {
            loading.value = false;
        }
    };
    return{
        getData,
        data,
        error,
        loading
    };

}