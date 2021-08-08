var data = {'title': 'Run Your Own Shop', 'desc': 'Serene Store and artRIA', 'img': '', 'imgCredit': '', 'time': '3 min', 'authorName': '', 'authorDesc': '', 'authorImg': '', 'articleContent': 'It&rsquo;s cool to be a student, but we&rsquo;ll tell you what&rsquo;s even cooler - running your own shop as a side hustle!<br><br>At IITGN, we&rsquo;ve always encouraged and inculcated a culture of entrepreneurship and independence among students. Infact, IIEC (IIT Gandhinagar Innovation and Entrepreneurship Center) in collaboration with EII (Entrepreneurship Initiative IITGN) organized a competition &lsquo;Run Your Own Shop&rsquo; , where students were asked to submit their business ideas. The competition witnessed an encouraging participation from the students and two of the ideas were selected as the best among the lot! They are featured here.<br><br><strong>Serene Store<br><br><div class="row"><div class="col-md-4"> <img class="para-img" src="../Assets/28A.jpg"></div> <div class="col-md-4"> <img class="para-img" src="../Assets/28B.jpg"></div><div class="col-md-4"> <img class="para-img" src="../Assets/28C.jpg"></div></div>Some products from Serene Store<br><br><div class="row"><div class="col-md-6"> <img class="para-img" src="../Assets/28D.jpg"></div> <div class="col-md-6"> <img class="para-img" src="../Assets/28E.jpg"></div></div>Founders: Tanmay Jain &amp; Yatharth Vakil</strong><br><br>The idea of Serene Store is simple: to plant/donate a tree for every clothing or accessory product sold. People can take action against climate change every time they do a simple act of purchasing with us. Since this was going to be our first such trial in the business world, we faced challenges both external and internal to us. The external challenge was obviously the Covid-19 that forced us to manage things unconventionally. The internal challenge was the inertia to put ourselves in front of the community. We have sold around thirty T-shirts as of now which means thirty trees are donated to the Cauvery Calling project by the Isha foundation. We have to add something here: the moment of making the first-ever sale is very precious. The biggest challenge that we faced due to Covid-19 was the uncertainty looming around. In general, uncertainty is not good for any business. Climate change is an important issue to be solved but a pandemic is an urgent one and if the pandemic didn&rsquo;t exist we would have seen a much more enthusiastic response for the Serene Store. We feel proud of what we have done and are thankful to all our customers who made a difference by choosing us. We have learned many lessons and that would not have been possible if we didn&rsquo;t try.<br><br><a href="https://www.instagram.com/clothing_serene/"> Serene Store Instagram</a><br><br><strong>artRIA<br><br>Founder: Surbhi Khewle </strong><br><br>Passion is the energy that keeps us going, that fills us with happiness, excitement and anticipation. Though I am pursuing a Ph.D. but artRIA has become my passion. I have always been into art and craft but before a couple of years, I became kind of obsessed with making dreamcatchers and I always had a dream to sell these. <br><br>I was hesitant to start a business because it is difficult to manage academics, sports and follow your passion at the same time. But during the lockdown, I had some free time, so I decided to share my work on instagram, and that\'s how artRIA started. It was limited to mandala art but in January 2021, Eii gave me an opportunity with \'Run your own shop\' and I thought to myself, &quot;Maybe it\'s time!&quot;. Even then I was not totally into the idea but then a friend came and asked, &quot;Why don\'t you do it? You always wanted to&quot;, and a few more stuff which gave me a little push and I right away filled the form and eventually got selected.<br><br>Since I recently started artRIA, I do not have much experience in the business but I love it. Among others, the main challenge I faced so far is time management. I am taking this business very slow by only selling to the IITGN community at the start and then slowly expanding to main cities and reaching out to more people via Instagram publicity. I hope someday I will sell my pieces nationwide and inspire people to follow their passion, no matter what your career is.<br><br><a href="https://www.instagram.com/__.artria.__/"> artRIA Instagram</a>', 'twitterShare': 'https://twitter.com/intent/tweet?url=URL_HERE&text=Check out this article from Torque:', 'fbShare': 'https://www.facebook.com/sharer/sharer.php?u=URL_HERE', 'prevArticle': '0027.html', 'articleNo': '0028', 'nextArticle': '0029.html'};

window.onload = function(){
    document.getElementById('article-title').innerHTML = data.title;
    document.getElementById('article-desc').innerHTML = data.desc;
    document.getElementById('article-img').src = data.img;
    document.getElementById('img-src').innerHTML = data.imgCredit;
    document.getElementById('article-time').innerHTML = '<i class="far fa-clock"></i> ' + data.time;
    document.getElementById('author-name').innerHTML = data.authorName;
    document.getElementById('author-desc').innerHTML = data.authorDesc;
    document.getElementById('author-img').src = data.authorImg;
    document.getElementById('article-text').innerHTML = data.articleContent;
    document.getElementById('share-twitter').href = data.twitterShare.replace("URL_HERE", document.URL);
    document.getElementById('share-fb').href = data.fbShare.replace("URL_HERE", document.URL);
};

function prev(){
    window.location.href = data.prevArticle;
}

function next(){
    window.location.href = data.nextArticle;
}