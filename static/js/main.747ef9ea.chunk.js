(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={bookItem:"BookListItem_bookItem__2vwd8",imgBlock:"BookListItem_imgBlock__2F5rw",textBlock:"BookListItem_textBlock__3KjBB"}},17:function(e,t,a){e.exports={bookList:"BookList_bookList__3cRMW",bookListItem:"BookList_bookListItem__1IgGt"}},34:function(e,t,a){e.exports={loader:"Loader_loader__1BfCr"}},35:function(e){e.exports=[{value:"fantasy",label:"fantasy"},{value:"thriller",label:"thriller"},{value:"drama",label:"drama"},{value:"mystery",label:"mystery"},{value:"horror",label:"horror"},{value:"satire",label:"satire"},{value:"computers",label:"computers"}]},38:function(e,t,a){e.exports=a(88)},5:function(e,t,a){e.exports={form:"SearchForm_form__2AreI",nameInput:"SearchForm_nameInput__1QAAb",genreSelect:"SearchForm_genreSelect__19DCk",submitBtn:"SearchForm_submitBtn__3Ov-m"}},88:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),l=a.n(r),i=a(6),s=a(7),c=a(10),u=a(8),m=a(11);function p(e){return e.map(function(e){return{id:e.id,volumeInfo:e.volumeInfo}}).map(function(e){return{id:e.id,img:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,description:e.volumeInfo.description,author:e.volumeInfo.authors,publisher:e.volumeInfo.publisher,publishedDate:e.volumeInfo.publishedDate,pageCount:e.volumeInfo.pageCount,rating:e.volumeInfo.averageRating}})}var b=a(28),h=a(9),f=a(37),d=a(5),g=a.n(d),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={bookName:"",bookGenre:"",selectedOption:null},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(h.a)({},n,o))},a.changeOption=function(e){a.setState({bookGenre:e.value,selectedOption:e})},a.handleSubmit=function(e){e.preventDefault(),(0,a.props.onSubmit)(Object(b.a)({},a.state))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.bookName,a=e.selectedOption,n=this.props.genres;return o.a.createElement("form",{className:g.a.form,onSubmit:this.handleSubmit},o.a.createElement("input",{className:g.a.nameInput,type:"text",placeholder:"Enter genre",name:"bookName",value:t,onChange:this.handleInputChange}),o.a.createElement(f.a,{value:a,onChange:this.changeOption,options:n,className:g.a.genreSelect,placeholder:"Select genre.."}),o.a.createElement("button",{className:g.a.submitBtn,type:"submit"},"Search"))}}]),t}(n.Component),k=a(13),E=a.n(k),I=function(e){var t=e.img,a=e.title,n=e.description,r=e.author,l=e.publisher,i=e.publishedDate,s=e.pageCount,c=e.rating;return o.a.createElement("div",{className:E.a.bookItem},o.a.createElement("div",{className:E.a.imgBlock},o.a.createElement("img",{className:"itemImg",alt:"img",src:t})),o.a.createElement("div",{className:E.a.textBlock},o.a.createElement("h2",{className:"title"},a),o.a.createElement("p",{className:"description"},n),o.a.createElement("p",{className:"author"},o.a.createElement("b",null,"Author: ")," ",r),o.a.createElement("p",{className:"publisher"},o.a.createElement("b",null,"Publisher: "),l),o.a.createElement("p",{className:"publishedDate"},o.a.createElement("b",null,"Published date: ")," ",i),o.a.createElement("p",{className:"pageCount"},o.a.createElement("b",null,"Page count: "),s),o.a.createElement("p",{className:"rating"},o.a.createElement("b",null,"Rating: "),c)))};I.defaultProps={description:"No description",author:"No author",publisher:"No publisher",publishedDate:"No published date",pageCount:0,rating:0};var _=I,N=a(17),S=a.n(N),B=function(e){var t=e.items;return o.a.createElement("ul",{className:S.a.bookList},t.map(function(e){return o.a.createElement("li",{className:S.a.bookListItem,key:e.id},o.a.createElement(_,e))}))},L=function(e){var t=e.text;return o.a.createElement("h1",null,"Whoops, something went wrong: ",t)},O=a(32),y=a.n(O),w="https://www.googleapis.com/books/v1/volumes?";var j=a(33),C=a.n(j),x=a(34),D=a.n(x),A=function(e){var t=e.name,a=e.color;return o.a.createElement(C.a,{className:D.a.loader,name:t,color:a})},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],isLoading:!1,error:null},a.fetchItems=function(e,t){(function(e,t){var a="".concat(w,"q=").concat(e.toLowerCase(),"+subject:").concat(t);return y.a.get(a).then(function(e){return e.data.items})})(e,t).then(function(e){return a.setState({books:p(e)})}).catch(function(e){return a.setState({error:e})}).finally(function(){return a.setState({isLoading:!1})})},a.formSubmit=function(e){var t=e.bookName,n=e.bookGenre;a.setState({isLoading:!0}),a.fetchItems(t,n)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.books,a=e.isLoading,n=e.error,r=this.props.genres;return o.a.createElement("div",null,o.a.createElement(v,{genres:r,onSubmit:this.formSubmit}),n&&o.a.createElement(L,{text:n.message}),a&&o.a.createElement(A,{name:"ball-spin-fade-loader",color:"blue"}),t.length>0&&o.a.createElement(B,{items:t}))}}]),t}(n.Component),G=a(35);l.a.render(o.a.createElement(F,{genres:G}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.747ef9ea.chunk.js.map