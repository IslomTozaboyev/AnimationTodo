import axios from "axios";

class PostServisecApi {
  static async getServerAll() {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return res.data;
  }
}

export default PostServisecApi;
