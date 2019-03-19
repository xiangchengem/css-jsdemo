$(function() {
	var num = 0;
	var timer = null;
	var flag = true;
	// 1.0 动态创建ol和li
	$(".indecator").append($("<ol></ol>"))
	$(".banner > ul > li").each(function(index, ele) {
		$("<li></li>").text(index + 1).appendTo($(".indecator > ol"))
	})
	$(".indecator > ol > li").eq(0).addClass('current')
	// 2.0 批量注册事件
	$(".indecator > ol").on("click", "li", function() {
		$(this).addClass('current').siblings().removeAttr('class');
		$(".banner > ul > li").eq($(this).index()).fadeIn(200, function() {
			flag = true;
		}).siblings().fadeOut(200);
		num = $(this).index()
	})
	// 3.0 鼠标经过和鼠标离开
	$(".container").hover(function() {
		$(".arrow").fadeTo(200, 1);
		clearInterval(timer)
	}, function() {
		$(".arrow").fadeTo(200, 0);
		timer = setInterval(autoPlay, 2000)
	});
	// 4.0 左右箭头
	$("#arrRight").on("click", function() {
		if(flag) {
			flag = false;
			autoPlay()
		}
	})
	function autoPlay() {
		num++;
		if(num > $(".banner > ul > li").length - 1) {
			num = 0;
		}
		$(".indecator > ol > li").eq(num).trigger('click')
	}
	$("#arrLeft").on("click", function() {
		if (flag) {
			flag = false;
			num--;
			if(num < 0) {
				num = $(".banner > ul > li").length - 1;
			}
			$(".indecator > ol > li").eq(num).trigger('click')
		}
	})
	// 5.0 自动轮播
	timer = setInterval(autoPlay, 2000)
})