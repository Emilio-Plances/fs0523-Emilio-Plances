let query=`dogs`;

fetch(`https://api.pexels.com/v1/search?query=${query}`,{
   method:"GET",
   headers: {
      authorization: "YjRk7QjbzAMpRjCNA1RKIj0h0EhypltWTeeYGmcpDQrr54PJKZT0i6fu"
   }
})
.then(res=>res.json())
.then(imgArr=>console.log(imgArr))
