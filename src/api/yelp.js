import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer HqborJzWX-bWpepjCd0V7XaQyNBXUXkkf5MJ109f-m2OrRn0Tndleas_JVBy368M07wTYW1wZsM2rBC-XCavcpofVMLn9PH0tDcp3F4SVITxJoiolMaZYtLyHKeTXnYx'
  }
})