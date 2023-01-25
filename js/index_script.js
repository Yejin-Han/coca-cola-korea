$(function(){
	//전역 변수 및 상수
	let scrollTopNum=0;
	const logo=$('#main_header>h1>a>img');
	const logo_orisrc=logo.attr('src');
	const gnb=$('#main_header>.gnb');
	const gnb_bg=$('#main_header>.gnb_bg');
	const gnb_sub=$('#main_header>.gnb>ul>li>.sub');
	const tnb_search=$('#main_header>.tnb>.tnb_search');
	const tnb_form=$('#main_header>.tnb>form');
	const tnb_searchbox=$('#main_header>.tnb>form>#searchbox');
	const tnb_searchbtn=$('#main_header>.tnb>form>#search_btn');
	const tnb_defVal=tnb_searchbox.val();
	const gnb_searchbox=$('#main_header>.gnb>.gnb_search>#searchbox');
	const gnb_defVal=gnb_searchbox.val();
	const brandWrap=$('.brand_wrap');

	//헤더 고정 시 변하는 것 함수로 정의
	function h_change(){
		$('#main_header').addClass('fix');
		logo.attr({src:'img/main/header_logo_change.png'});
		tnb_search.addClass('fix');
		tnb_form.addClass('fix');
	}
	function h_origin(){
		$('#main_header').removeClass('fix');
		logo.attr({src:logo_orisrc});
		tnb_search.removeClass('fix');
		tnb_form.removeClass('fix');
	}
	
	//창 너비에 따라 원래대로 돌아가도록 함수
	function responHeader(){
		if($(window).width()>1280){
			gnb.css('left','50%');
			gnb_bg.hide();
			$('#main_header>.gnb>ul>li>a').removeClass('on');
			gnb_sub.height('231px');
			gnb_bg.height('231px');
			gnb_bg.css({'background':'#fff','top':'89px'});
			tnb_search.show();
		} else{
			gnb.css('left','-100%');
			gnb_bg.hide();
			gnb_sub.height('auto').hide();
			gnb_bg.height('100%');
			gnb_bg.css({'background':'rgba(0,0,0,0.7)','top':'0px'});
			tnb_search.hide();
			$('#main_header>.tnb>form').hide();
		}
		if($(window).width()>1280){
			gnb_sub.css('padding','23px 0 0 18.2%');
		} else if($(window).width()>1024){
			gnb_sub.css('padding','14px 0 4px 32px');
		} else if($(window).width()>768){
			gnb_sub.css('padding','14px 0 4px 33px');
		} else{
			gnb_sub.css('padding','5px 0 0 20px');
		}
		if($(window).width()>768){
			$('#sustain .d').show();
			$('#sustain .m').hide();
		} else{
			$('#sustain .d').hide();
			$('#sustain .m').show();
		}
		if($(window).width()>1510 || parseInt(brandWrap.css('left'))>0){
			brandWrap.draggable({
				axis : 'x',
				disabled: true
			});
		} else{
			brandWrap.draggable({
				axis : 'x',
				disabled: false
			});
		}
	}
	responHeader(); //최초 인식
	
	//1280↑ gnb 마우스효과
	gnb.on('mouseenter',function(event){
		event.stopPropagation();
		if(($(window).width()>1280) && (tnb_searchbtn.css('display')=='none')){
			h_change();
			gnb_sub.stop().slideDown(300);
			gnb_bg.stop().slideDown(300);
		}
	});
	gnb.on('mouseleave',function(event){
		event.stopPropagation();
		if(($(window).width()>1280) && (tnb_searchbtn.css('display')=='none')){
			h_origin();
			scrollTopNum=$('html,body').scrollTop();
			if(scrollTopNum>0){
				h_change();
			}
			gnb_sub.stop().slideUp(200);
			gnb_bg.stop().slideUp(200);
		}
	});

	//1280↓ header 마우스효과
	$('#main_header').on('mouseenter',function(event){
		event.stopPropagation();
		if($(window).width()<=1280){
			h_change();
		}
	});
	$('#main_header').on('mouseleave',function(event){
		event.stopPropagation();
		if($(window).width()<=1280){
			h_origin();
			scrollTopNum=$('html,body').scrollTop();
			if(scrollTopNum>0){
				h_change();
			}
		}
	});

	//1280↓ 햄버거 버튼 클릭시 애니메이션
	$('#main_header>.menu').on('click',function(event){
		event.stopPropagation();
		if($(window).width()<=1280){
			event.preventDefault();
			$('body').css({width:'100%', height:'100%'}).css('overflow','hidden').css('touch-action','none');
			$('#main_header>.gnb>ul>li>a').removeClass('on');
			gnb_sub.height('auto').hide();
			gnb_bg.show();
			gnb_bg.css('top','0px');
			gnb.animate({left:'0%'},400);
		}
	});
	$('#main_header>.gnb>.close_btn').on('click',function(event){
		event.stopPropagation();
		if($(window).width()<=1280){
			$('body').css('overflow','auto').css('touch-action','auto');
			gnb_bg.hide();
			gnb.animate({left:'-100%'},400);
			gnb_searchbox.val(gnb_defVal);
		}
	});

	//1280↓ 하위 아코디언 메뉴 애니메이션
	$('#main_header>.gnb>ul>li>a').on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		if($(window).width()<=1280){
			if($(this).next().css('display')=='none'){
				$('#main_header>.gnb>ul>li>a').removeClass('on');
				$(this).addClass('on');
				$('#main_header>.gnb>ul>li>.sub:visible').stop().slideUp();
				$(this).next().stop().slideDown(300);
			} else{
				$(this).removeClass('on');
				$(this).next().stop().slideUp(200);
			}
		}
	});

	//tnb_search의 #search_btn 클릭시 #searchbox 애니메이션
	let state=1;
	tnb_search.on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		if(state==1){
			tnb_search.addClass('active');
			tnb_form.show();
			tnb_form.css('border-width','1px');
			tnb_form.animate({'width':'270px'},200);
			tnb_searchbtn.fadeIn(200);
			state--;
		} else{
			tnb_search.removeClass('active');
			tnb_form.animate({'width':'0px'},300,function(){
				tnb_form.hide();
			});
			tnb_form.css('border-width','1px');
			tnb_searchbtn.hide();
			tnb_searchbox.val(tnb_defVal);
			state++;
		}
	});

	//tnb_search의 #search_box focus,blur 효과
	tnb_searchbox.on('focus',function(){
		if(tnb_searchbox.val()==tnb_defVal){
			tnb_searchbox.val('');
		}
	});
	tnb_searchbox.on('blur',function(){
		if(tnb_searchbox.val()==''){
			tnb_searchbox.val(tnb_defVal);
		}
	});

	//gnb_search의 #search_box focus,blur 효과
	gnb_searchbox.on('focus',function(){
		if(gnb_searchbox.val()==gnb_defVal){
			gnb_searchbox.val('');
		}
	});
	gnb_searchbox.on('blur',function(){
		if(gnb_searchbox.val()==''){
			gnb_searchbox.val(tnb_defVal);
		}
	});

	//sect2 상수 및 애니메이션 클래스 추가 함수
	const p1=$('#company>.innerbox>.p1');
	const p2=$('#company>.innerbox>.p2');
	const p3=$('#company>.innerbox>.p3');
	const p4=$('#company>.innerbox>.p4');

	//질문점: 예를 들어 마지막 p에 대한 함수가 실행될 위치에서 새로고침을 해
	//그래도 4개가 한번에 실행되는게 아니고 시간차를 두고 싶다면????
	function slide_r(p){
		let stdPos=$(window).scrollTop()+$(window).height()-($(window).height()/5);
		//대략 화면의 5분의 4 지점에 해당 요소가 보이면 실행되도록
		if(p.is(":visible")){ //해당 요소가 화면에 보일때만 실행(앞선 질문점이 해결이 안돼서 맞게 되는지 잘 모르겠음)
			if(stdPos>p.offset().top){
				p.addClass('slide_r');
			}
		}
	}
	function slide_l(p){
		let stdPos=$(window).scrollTop()+$(window).height()-($(window).height()/5);
		if(p.is(":visible")){
			if(stdPos>p.offset().top){
				p.addClass('slide_l');
			}
		}
	}

	//sect2 more_btn mouseenter/leave 클래스추가
	$('#company>.innerbox>.more_btn').on('mouseenter',function(){
		$(this).addClass('on');
	});
	$('#company>.innerbox>.more_btn').on('mouseleave',function(){
		$(this).removeClass('on');
	});

	//sect3 brand_wrap scroll
	let curXPos=0;
	let curDown=false;
	let dst=0;
	let calcDst=0;
	const brandInner=$('.brands>.innerbox');
	const brandName=$('.brand_name');
	brandInner.mousedown(function(e){
		if($(window).width()<=1510){
			curDown=true;
			curXPos=e.offsetX;
		}
	});
	brandInner.mousemove(function(e){
		if(!curDown) return;
		e.preventDefault();
		/* let newXPos=e.offsetX;
		console.log(brandWrap.offset().left);
		dst=Math.abs(newXPos-curXPos);
		if(newXPos-curXPos<0){
			dst*=(-1);
		} */
		console.log(brandWrap.css('left'));
		//console.log(brandWrap.css('transform').replace(/[^0-9\-,]/g,'').split(',')[4]);
		//brandWrap.offset({left: brandWrap.offset().left+dst+'px'});
		//brandWrap.css('transform','translateX('+dst+'px)');
		//brandActive.css('z-index', '1000');
	});
	/* /* brandInner.mouseleave(function(e){
		curDown=false;
	});
	brandInner.mouseup(function(e){
		curDown=false;
	}); */
	if($(window).width()>1510 || parseInt(brandWrap.css('left'))>0){
		brandWrap.draggable({
			axis : 'x',
			disabled: true
		});
	} else{
		brandWrap.draggable({
			axis : 'x',
			disabled: false
		});
	}
	//sect3 brand 클릭하면 내용 바뀌기, active 따라다니기
	const brandList=$('.brand_name>li');
	const brandActive=$('.brands').find('.active');
	brandActive.css('transition', 'none');
	brandActive.css('left', `${parseInt(brandList.eq(0).children('a').width())/2}px`);
	brandActive.css('transform', 'translateX(-50%)');
	for(let i=0; i<brandList.length; i++){
		brandList.eq(i).on('click',function(){
			brandActive.css('transition', 'all 0.6s');
			brandActive.css('z-index', '1000');
			$('#brand>.content_wrap>.content').load(`../data/cont${i+1}.html`);
			$('#brand>.content_wrap>.content').addClass('appear');
			brandActive.css('left', `${$(this).children('a').offset().left+parseInt($(this).children('a').width())/2-brandList.eq(0).children('a').offset().left}px`);
		});
		$('#brand .content').removeClass('appear');
	}

	//sect3 brand_btn mouseenter/leave 클래스추가
	$('#brand .brands>.innerbox>.brand_btn').on('mouseenter',function(){
		$(this).addClass('on');
	});
	$('#brand .brands>.innerbox>.brand_btn').on('mouseleave',function(){
		$(this).removeClass('on');
	});

	//sect4 not hover 배경 어둡게
	$('#sustain>.container>div').on('mouseenter',function(){
		if($(window).width()>768){
			$(this).siblings().css({'border-color':'rgba(0,0,0,0.6)','z-index':'1000'});
			$(this).siblings().find('.bg_on').show();
		}
	});
	$('#sustain>.container>div').on('mouseleave',function(){
		if($(window).width()>768){
			$(this).siblings().css({'border-color':'rgba(20,20,20,0.3)','z-index':'10'});
			$(this).siblings().find('.bg_on').hide();
		}
	});

	//스크롤 시
	$(window).scroll(function(){
		scrollTopNum=$('html,body').scrollTop();

		//헤더 고정
		if(scrollTopNum>0){
			h_change();
		} else{
			h_origin();
		}

		//sect2 타이포 애니메이션 클래스 추가 함수 실행
		slide_r(p1);
		slide_l(p2);
		slide_r(p3);
		slide_l(p4);
	});
	
	//sect1 slide banner - swiper1
	const swiper1 = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		speed: 400,
		spaceBetween: 0,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});

	//sect1 pagination bar animation
	$('.swiper-pagination-bullet').each(function(){
		$(this).append('<span></span>');
	});
	$('.swiper-pagination-bullet').eq(0).removeClass('swiper-pagination-bullet-active');

	$('.swiper-pagination-bullet').eq(0).addClass('swiper-pagination-bullet-active');

	//sect1 play, pause click시 재생/일시정지
	$('.swiper-play').on('click', function() {
		swiper1.autoplay.run();
		// return false;
		$('.swiper-pagination-bullet-active').stop().removeClass('paused');
	});
	$('.swiper-pause').on('click', function() {
		swiper1.autoplay.pause();
		// return false;
		$('.swiper-pagination-bullet-active').stop().addClass('paused');
	});
	
	//sect1 play, pause btn의 위치 고정
	const bullLast=$('.swiper-pagination-bullet').last();
	let bullLeft=0;
	let btnL=0;
	function leftFix(){
		bullLeft=bullLast.offset().left;
		if($(window).width()>768){
			btnL=bullLeft + bullLast.outerWidth() + 32;
		} else{
			btnL=bullLeft + bullLast.outerWidth() + 16;
		}
		$('#main_visual .btns').css('left',btnL);
	}
	leftFix();

	//sect4 mobile slick
	const slickOptions={
		slide: 'div',
		infinite: false,    
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: false,
		dots: false,
		autoplay: false,
		pauseOnHover: false,
		draggable: true,
    centerMode: true,
    centerPadding: '10%',
	};
	if($(window).width()<=768){
		$('.slider-wrap').not('.slick-initialized').slick(slickOptions);
	} else{
		$('.slider-wrap').filter('.slick-initialized').slick('unslick');
	}

	//window 크기가 바뀔 때 원래대로 돌아가도록
	$(window).resize(function(){
		responHeader();
		leftFix();
		if($(window).width()>768){
			$('.slider-wrap').filter('.slick-initialized').slick('unslick');
		} else{
			$('.slider-wrap').not('.slick-initialized').slick(slickOptions);
		}
	});
});