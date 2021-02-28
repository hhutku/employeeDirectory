import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us&exc=gender,location,login,registered,cell,id";

const Search={
  search: function() {
    return axios.get(BASEURL );
  }
}

export default Search;