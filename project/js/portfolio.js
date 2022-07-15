const contenido = [
	{
        url:" https://www.youtube.com/embed/Wre1F5YyIlA",
        title: "Stranger Things T1",
	},
	{
        url: "https://www.youtube.com/embed/R1ZXOOLMJ8s",
        title: "Stranger Things T2",

	},
	{
        url: "https://www.youtube.com/embed/MoMDmyg-aKk",
        title: "Stranger Things T3",

	},
    {
        url: "https://www.youtube.com/embed/wn9AJDME6ak",
        title: "Stranger Things T4"
    }
];


$( window ).on("load", () => {
	contenido.forEach(elem => {
		$("#videos").append (
        `     
    <article class="row mx-0 col-md-6 col-lg-4 col-xs-12 justify-content-center">
        <div class="row mx-0 px-0" style="width: 20rem;">
            <h2>${elem.title}</h2>
            <iframe src="${elem.url}" frameborder="0"></iframe>            
        </div>
    </article>
        `
		)
	})
});