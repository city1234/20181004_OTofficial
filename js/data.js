//資料架構
var vm = new Vue({
    el: '#mainbanner,#newsPageout,#airship',
    data: {
        outwindow: false, //首页是否跳窗
        showpage: 0, //首页跳窗是第几个公告从0开始
        newnews: 1, //新闻新产品预告数量****delete
        bannerstyle: 0,
        slickstyle: false,
        nowlistpage: 0, //当前分页 product>0,content>1,event>2,download>3
        search: "",
        page: [{
                totalnews: 0, //资料总数
                pagelistnum: 9, //每页显示条数
                nowpage: 1, // 当前页数
            },
            {
                totalnews: 0, //资料总数
                pagelistnum: 9, //每页显示条数
                nowpage: 1, // 当前页数
            },
            {
                totalnews: 0, //资料总数
                pagelistnum: 9, //每页显示条数
                nowpage: 1, // 当前页数
            },
            {
                totalnews: 0, //资料总数
                pagelistnum: 9, //每页显示条数
                nowpage: 1, // 当前页数
            }
        ],
        newss: [
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: true, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: true, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "action/20180929_openwarad/index.html", //点击连结,下载檔案
                downloadbtn: false, //是否有下载按钮
                downloadlink: "", //下载连结
                mainbannerimg: "images/activebanner/20180929_openwarad.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180929_openwarad_s.jpg", //公告内页小图1410*385
                name: "业界顶尖的彩票开奖平台!!", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/10", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: true, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "action/20180917_app/index.html", //点击连结,下载檔案
                downloadbtn: false, //是否有下载按钮
                downloadlink: "", //下载连结
                mainbannerimg: "images/activebanner/20180917_app.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180917_apps.jpg", //公告内页小图1410*385
                name: "精彩隨時隨地,一切盡在掌握!!", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/09", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: true, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "https://elegant-wescoff-78d55a.netlify.com/", //点击连结,下载檔案
                downloadbtn: true, //是否有下载按钮
                downloadlink: "loading/jdb.zip", //下载连结
                mainbannerimg: "images/activebanner/20180823_jdb.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180823_jdbs.jpg", //公告内页小图1410*385
                name: "只战经典 娱乐首选!!", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/08", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: true, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "action/20180605_pngpage/index.html", //点击连结,下载檔案
                downloadbtn: true, //是否有下载按钮
                downloadlink: "loading/PNG.rar", //下载连结
                mainbannerimg: "images/activebanner/20180605_png.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180605_pngs.jpg", //公告内页小图1410*385
                name: "PLAY'n GO 独特灵感和创造力!!", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/06", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: false, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "action/20180717_news/index.html", //点击连结,下载檔案
                downloadbtn: false, //是否有下载按钮
                downloadlink: "loading/20180717_news.zip", //下载连结
                mainbannerimg: "images/activebanner/20180717_news.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180717_news_s.jpg", //公告内页小图1410*385
                name: "代理后台新增即时注单功能", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/07", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0,
                importanttag: false,
                istopbanner: true,
                clickto: false,
                link: "http://yoplay.com/index.php#service",
                downloadbtn: true,
                downloadlink: "loading/20180608_yoplay.zip",
                mainbannerimg: "images/activebanner/20180608_yoplay.jpg",
                bannerimg: "images/activebanner/20180608_yoplays.jpg",
                name: "业内首创多人街机，热闹互动新体验",
                time: "2018/06",
                containtexts: '',
                containtext: ''
            },
            {
                newstype: 0,
                importanttag: false,
                istopbanner: true,
                clickto: false,
                link: "http://xingaming.com/gameInfo.html",
                downloadbtn: true,
                downloadlink: "loading/XIN_banner.zip",
                mainbannerimg: "images/activebanner/20180607_xin.jpg",
                bannerimg: "images/activebanner/20180607_xin_s.jpg",
                name: "XINGAMING",
                time: "2018/06",
                containtexts: '',
                containtext: ''
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: false, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "action/20180522_bggame/index.html", //点击连结,下载檔案
                downloadbtn: true, //是否有下载按钮
                downloadlink: "loading/BG_banner.rar", //下载连结
                mainbannerimg: "images/activebanner/20180522_bggame.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180522_bggame_s.jpg", //公告内页小图1410*385
                name: "BG大遊丰富你的世界!!", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/06", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: false, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "action/20180622_og_intro/index.html", //点击连结,下载檔案
                downloadbtn: true, //是否有下载按钮
                downloadlink: "loading/20180623_ogtu_banner.zip", //下载连结
                mainbannerimg: "images/activebanner/20180623_ogtu.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180623_ogtus.jpg", //公告内页小图1410*385
                name: "OG体育上线,见证王者诞生!!", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/06", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: false, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "CQ9/index.html", //点击连结,下载檔案
                downloadbtn: true, //是否有下载按钮
                downloadlink: "loading/CQ9.zip", //下载连结
                mainbannerimg: "images/activebanner/20180430_cq9.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180430_cq9_s.jpg", //公告内页小图1410*385
                name: "亚洲最具规模的游戏研发企业!!", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/05", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: false, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "20180425_vgs/index.html", //点击连结,下载檔案
                downloadbtn: true, //是否有下载按钮
                downloadlink: "loading/VGS.zip", //下载连结
                mainbannerimg: "images/activebanner/20180430_vgs.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/20180430_vgs_s.jpg", //公告内页小图1410*385
                name: "享受真实赌场的精彩刺激!!", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/05", //活动日期
                containtexts: '',
                containtext: '' //内容html
            },
            {
                newstype: 0, //资讯子分页类型 product>0,content>1,event>2,download>3
                importanttag: false, //产品专栏活动专栏头版,内容发布重点标签
                istopbanner: false, //是否首页展示
                clickto: false, //是否有内页跳窗公告
                link: "luckyairship/index.html", //点击连结,下载檔案
                downloadbtn: false, //是否有下载按钮
                downloadlink: "", //下载连结
                mainbannerimg: "images/activebanner/mainbanner_01.jpg", //首页大图2500*1080
                bannerimg: "images/activebanner/infbanner_01.jpg", //公告内页小图1410*385
                name: "幸运相伴，让您梦想成真！", //公告名称(最好8个全形字以内),download活动素材/轮播图
                time: "2018/03", //活动日期
                containtexts: '',
                containtext: '\
                    <div style="text-align:center;"><a href="luckyairship/index.html" target="_blank">前往活动连结</a></div>' //内容html
            },
            {
                newstype: 0,
                importanttag: false,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "images/activebanner/mainbanner.jpg",
                bannerimg: "images/activebanner/infbanner.jpg",
                name: "2018新春特惠活动",
                time: "2018/01/30",
                containtexts: '',
                containtext: '\
                    东方包网平台为答谢各位新老客户多年的支持与厚爱在春节来临之际特别推出\
                    <span class= "redtxt" > 新春特惠活动</span>，凡此活动期间在我司开设游戏网站\
                    <span class= "redtxt" > 开版费！服务费！费用统统全免！</span> 活动时间2018年2月1日至3月31日名额仅限58名、开完即止。\
                    <br /> 2018年系统\
                    <span class= "underline" > 全新升级</span > 接入热门游戏\
                    <span class= "underline" > PRG电子</span >、\
                    <span class="underline">VG棋牌</span>、\
                    <span class="underline">CMD体育</span>、现火爆内测中、更多热门游戏正在接入中……敬请期待！\
                    <br /> 高效稳定的系统！亲切优惠的价格！结合最新最火爆的游戏，专业打造只属于您的游戏平台，心动不如马上行动！详情咨询官方客服人员！\
                    <br />\
                    <br />东方平台官网：\
                    <a href="http://www.og-bwt.com" target="_blank">www.og-bwt.com</a> &nbsp;&nbsp;\
                    <a href="http://www.op88888.com" target="_blank">www.op88888.com</a> &nbsp;&nbsp;&nbsp; 官方客服：QQ: 2158999999 &nbsp;&nbsp; 电话：0063-9157165666\
                    <br />\
                    <br />\
                    <br /> 东方平台全体员工祝您新的一年生意兴隆！财源广进！兴旺发达！'
            },
            {
                newstype: 0,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "v1.0/index.html",
                downloadbtn: false,
                downloadlink: "images/activebanner/mainbanner_01.jpg",
                mainbannerimg: "",
                bannerimg: "images/newsBigBanner.png",
                name: "【H5游戏主页改版】新架构，新体验，详戳图片！！",
                time: "2018/01/30",
                containtexts: '',
                containtext: ''
            },
            // {
            //     newstype: 1,
            //     importanttag: false,
            //     istopbanner: false,
            //     clickto: false,
            //     link: "javascript: void(0)",
            //     mainbannerimg: "",
            //     bannerimg: "无资料",
            //     name: "无资料",
            //     time: "无资料",
            //     containtexts: "无资料",
            //     containtext: "无资料"
            // },
            {
                newstype: 1,
                importanttag: false,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                downloadbtn: false,
                downloadlink: "images/activebanner/mainbanner_01.jpg",
                mainbannerimg: "",
                bannerimg: "",
                name: "已更新",
                time: "2018/8/22",
                containtexts: '1.2.6版本功能说明',
                containtext: '\
                <table>\
                    <tr>\
                        <td width="20%">标题</td>\
                        <td>内容描述</td>\
                    </tr >\
                    <tr>\
                        <td>支付页面改版</td>\
                        <td class="txtleft">\
                            1.  界面优化， 呈现简洁， 操作简便， 用户可快速选择到需要的具体支付方式； <br / > \
                            2.  手机端充值页面展现内容支持管理后台按需自定义； <br / > \
                            3.  支持前端快选金额自定义； <br / > \
                            4.  第三方充值， 自动生成小数点开启 / 关闭可灵活控制； <br / > \
                            5.  公司账号管理优化， 新增银行界面增加筛选条件， 前端提交名称可后台调整； <br / > \
                        </td>\
                    </tr>\
                    <tr>\
                        <td>第三方平台</td>\
                        <td class="txtleft">\
                            新接入JDB电子；\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>登录逻辑优化</td>\
                        <td class="txtleft">\
                           会员登录错误次数过多时， 增加复杂验证码验证及更多个人信息验证；\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>会员真实姓名字符限制修改</td>\
                        <td class="txtleft">\
                            会员真实姓名长度可支持20位； \
                        </td>\
                    </tr>'
            },
            {
                newstype: 1,
                importanttag: false,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                downloadbtn: false,
                downloadlink: "images/activebanner/mainbanner_01.jpg",
                mainbannerimg: "",
                bannerimg: "",
                name: "已更新",
                time: "2018/7/17",
                containtexts: '1.2.5版本功能说明',
                containtext: '\
                <table>\
                    <tr>\
                        <td width="20%">标题</td>\
                        <td>内容描述</td>\
                    </tr >\
                    <tr>\
                        <td>即时注单<新增></td>\
                        <td class="txtleft">\
                            代理后台<a href="action/20180717_news/index.html" target="_blank">新增即时注单功能</a>，方便营运商随时查看各个第三方注单情况\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>第三方接入<新增></td>\
                        <td class="txtleft">\
                            1.	接入<a href="action/20180605_pngpage/index.html" target="_blank">PNG电子</a><br />\
                            2.	接入<a href="action/20180522_bggame/index.html" target="_blank">BG平台</a>，包括：BG视讯、BG捕鱼、BG电子<br />\
                            3.	AG拆分为AG电子和<a href="http://yoplay.com/index.php#yo80s" target="_blank">YOPALY电子</a>，增设各个电子游戏入口<br />\
                            4.	<a href="action/20180622_og_intro/index.html" target="_blank">OG体育</a>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>注册功能设置</td>\
                        <td class="txtleft">\
                            1.	代理后台可关闭手机和PC端注册功能<br />\
                            2.	可开启同一个IP的注册人数限制<br />\
                            3.	增加注册黑名单功能，可将某个IP、姓名、电话、邮箱加入黑名单中\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>出入款总账优化</td>\
                        <td class="txtleft">\
                            1.	出入款总账中，会员出款数据根据操作时间统计，且只统计成功出款的数据<br />\
                            2.	出入款记录中增加操作时间查询<br />\
                            3.	拒绝出款数据统计在会员【出款被扣除金额】中\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>后台IP名单开关控制</td>\
                        <td class="txtleft">针对厅主及子账号设置IP白名单，只能通过白名单才可进行登陆，确认厅主及子账号登陆的安全性</td>\
                    </tr>'
            },
            {
                newstype: 1,
                importanttag: false,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                downloadbtn: false,
                downloadlink: "images/activebanner/mainbanner_01.jpg",
                mainbannerimg: "",
                bannerimg: "",
                name: "已更新",
                time: "2018/5/29",
                containtexts: '彩票2.0.2版本功能说明',
                containtext: '\
                <table>\
                    <tr>\
                        <td width="20%">标题</td>\
                        <td>内容描述</td>\
                    </tr >\
                    <tr>\
                        <td>手机端六合彩增加玩法</td>\
                        <td class="txtleft">手机端玩法，增加正码特和自选不中玩法</td>\
                    </tr>\
                    <tr>\
                        <td>香港六合彩撤单功能</td>\
                        <td class="txtleft">香港六合彩当期未封盘前注单会员可进行撤回</td>\
                    </tr>'
            },
            {
                newstype: 1,
                importanttag: false,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                downloadbtn: false,
                downloadlink: "images/activebanner/mainbanner_01.jpg",
                mainbannerimg: "",
                bannerimg: "",
                name: "已更新",
                time: "2018/4/30",
                containtexts: '1.2.4版本功能说明',
                containtext: '\
                <table>\
                    <tr>\
                        <td>标题</td>\
                        <td>内容描述</td>\
                    </tr >\
                    <tr>\
                        <td>统计报表_彩种报表<新增></td>\
                        <td class="txtleft">代理后台、报表查询-新增彩种报表，可查阅每个彩种在某个区间内的数据情况 <br />\
                            \
                            </td>\
                    </tr>\
                    <tr>\
                        <td>第三方接入<新增></td>\
                        <td class="txtleft">1.	视讯新增VGS<br />\
                        2.	电子游戏新增CQ9传奇电子<br />\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>报表优化</td>\
                        <td class="txtleft">\
                        1.	报表中去除各层级交收额度<br />\
                        2.	去除会员报表查询结果中的全部栏位<br />\
                        3.	优惠活动中，优化查询页面优化<br />\
                        4.	优化统计中，BB和MG平台分为小平台展示<br />\
                        5.	退佣统计中，代理佣金设定、退佣统计、退佣查询页面优化<br />\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>AG返水拆分</td>\
                        <td class="txtleft">\
                            1.	AG平台拆分为AG视讯，AG捕鱼，AG电子<br />\
                            2.	代理后台各个模块分别增加AG视讯、捕鱼、电子三类的投注记录，反水/冲销详情<br />\
                            3.	新线上付款设定、优惠活动、退佣模块均可针对AG视讯/捕鱼/电子三类做不同设定<br />\
                            4.	历史数据会统计AG视讯中<br />\
                           \
                        </td>\
                    </tr>\
                    <tr>\
                        <td>会员中心，投注记录页面优化</td>\
                        <td class="txtleft">\
                        1.	前端（PC/H5）：<br / >\
                            <li style="list-style-type:lower-alpha;padding-left: 10px;">PC端会员中心，我的账户、投注记录、往来记录需要分开展示AG三个数据</li>\
                            <li style="list-style-type:lower-alpha;padding-left: 10px;">手机端投注记录和往来记录需要分开展示AG三个数据</li>\
                        2.	手机端：<br />\
                            <li style="list-style-type:lower-alpha;padding-left: 10px;">投注记录按照最新样式，可以选择单一平台和七天的时间内进行查询相对应的注单内容</li>\
                            <li style="list-style-type:lower-alpha;padding-left: 10px;">非美东时间平台时间按照第三方时间展示，增加温馨提示</li>\
                            <li style="list-style-type:lower-alpha;padding-left: 10px;">彩票和体育可以查询到注单详情，第三方暂不支持</li>\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>存款优惠和汇款优惠限额控制</td>\
                        <td class="txtleft">\
                            1.	子账号新增人工存入存款优惠限额、人工存入汇款优惠限额，可以对应控制人工线上存提-人工存入-存款优惠/汇款优惠<br / >\
                            2.	后台权限添加批次处理（子账号默认不开启）<br / >\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>增加在线人数权限设置</td>\
                        <td class="txtleft">\
                            在线人数权限仅针对厅主与子帐号, 详情请查看后台操作权限 <br />\
                            </td>\
                    </tr>\
                    <tr>\
                        <td>后台添加代理公告信息</td>\
                        <td class="txtleft">\
                            1.	代理后台 - 公告 / 讯息添加代理公告信息，可以查看历史代理公告信息、当前代理公告信息<br />\
                            2.	公共信息页面右下角点击代理公告信息，可以跳转到代理公告信息页面<br />\
                            3.	添加代理公告信息权限，所有层级都有此权限，默认都开启<br />\
                            </td>\
                    </tr>\
                    <tr>\
                        <td>网站咨询系统</td>\
                        <td class="txtleft">\
                            1.	将网站资讯编辑和在线存款并列放置同级功能项，并单独做权限控制 <br />\
                            2.	网站资讯编辑，增加分组功能，可支持新增分组，删除分组，图片组别调整，批量删除图库资源 <br />\
                           \
                        </td>\
                    </tr>\
                </table >'
            },
            {
                newstype: 1,
                importanttag: false,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                downloadbtn: false,
                downloadlink: "images/activebanner/mainbanner_01.jpg",
                mainbannerimg: "",
                bannerimg: "",
                name: "已更新",
                time: "2018/4/16",
                containtexts: '1.2.3版本功能说明',
                containtext: '\
                <table>\
                    <tr>\
                        <td>标题</td>\
                        <td>内容描述</td>\
                    </tr >\
                    <tr>\
                        <td>提款次数优化</td>\
                        <td class="txtleft">1.	会员的提款次数数据拆分为前端提款和人工提款 <br />\
                            2.	历史数据中的人工提出不拆分，归为提款次数中，只在上线后开始拆分 <br />\
                            3.	人工提出次数只包含人工提出项目中重复出款和手动申请出款次数 <br />\
                            </td>\
                    </tr>\
                    <tr>\
                        <td>忘记密码界面增加在线客服</td>\
                        <td class="txtleft">1.	在忘记密码页面增加在线客服，点击可跳转在线客服聊天窗口 <br />\
                        </td>\
                    </tr>\
                    <tr>\
                        <td>验证码更改</td>\
                        <td class="txtleft">1.后台新增三种验证码，可满足客户对不同验证的需求，三种验证码分别是：<br />\
                            <li style="list-style-type:lower-alpha;padding-left: 10px;">简单验证码，就是原来的验证码不做改变 </li>\
                            <li style="list-style-type:lower-alpha;padding-left: 10px;">混合验证码，数子字母组合或者纯字母的验证码</li>\
                            <li style="list-style-type:lower-alpha;padding-left: 10px;">逻辑验证码，10以内的整数加减法</li>\
                            2.后台仅能选择开启其中一种模式，默认情况下开启数字验证码</td>\
                    </tr>\
                    <tr>\
                        <td>微信支付宝支持银行卡转账</td>\
                        <td class="txtleft">1.	线下微信、支付宝均支持银行卡转账，新增账号增加“方式二”，账号和卡号都填写了，新增成功的在停用区产生2条数据，一条是账号，一条是卡号</td>\
                    </tr>\
                    <tr>\
                        <td>H5增加手机游戏客户端下载</td>\
                        <td class="txtleft">1.	在右侧导航栏增加游戏客户端的入口，可以针对PT、MG、AG的游戏进行下载 <br />\
                            2.	会员有额度转换或者登入过PT、MG游戏，就可以查看密码 <br />\
                            </td>\
                    </tr>\
                    <tr>\
                        <td>提款页面优化</td>\
                        <td class="txtleft">1.	针对提款界面的银行卡与账号显示进行优化调整，会员可以看到完整的银行卡名称与银行卡账号</td>\
                    </tr>\
                    <tr>\
                        <td>出入款记录权限</td>\
                        <td class="txtleft">1.  出款记录：只读权限（只能查看出款记录）；操作权限：快速出款、确定（稽核）、取消、拒绝 <br />\
                            2.  入款记录：只读权限（只能查看入款记录）；操作权限：确定、取消 <br />\
                            <br />\
                            </td>\
                    </tr>\
                </table >'
            },
            {
                newstype: 2,
                importanttag: true,
                istopbanner: false,
                clickto: true,
                link: "javascript: void(0)",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "images/activebanner/mainbanner_pp.jpg",
                bannerimg: "images/activebanner/infbanner_pp.jpg",
                name: "过关斩将锦标赛",
                time: "2018/04/05",
                containtexts: '',
                containtext: '\
                    <div style="max-width:800px;margin:0 auto;"><div align="center">过关斩将锦标赛，50万谁与争锋 每周奖金池高达88,000元</div>\
                    <br/>Dates:\
                    <br/>锦标赛1：2018年4月5日至2018年4月8日\
                    <br/>锦标赛2：2018年4月12日至2018年4月15日\
                    <br/>锦标赛3：2018年4月19日至2018年4月22日\
                    <br/>锦标赛4：2018年4月26日至2018年4月29日\
                    <br/>锦标赛5：2018年5月3日至2018年5月6日\
                    <br/>锦标赛6：2018年5月10日至2018年5月13日\
                    <br/><br/>机制：旋转次数\
                    <br/>最低下注：0.30美元（1.90人民币）\
                    <br/>符合条件的游戏：所有PP老虎机，但不包括：888 Gold、 Diamonds are Forever 3 Lines、 Irish Charms、 Money Roll、Queen of Gold、桌面游戏(Table games)和其他游戏(Other games) 。\
                    <br/>* 有关包含所有符合条件的游戏的详细列表，请联系您的客户经理\
                    <br/>每周奖池：超过<span class= "redtxt" >88,800元</span>人民币\
                    <br/><div class="txtcenter"><a href="https://pp88.asia/tournament/the_golden_path_tournament_zh/" target="_blank"><div class="inpagebtn">每周排行榜点击这里</div></a></div>\
                    <br/>奖金池累计总奖金超过<span class= "redtxt" >50万</span>人民币\
                    <br/><br/><br/>运营商有责任确保我们的产品和服务符合他们国家的适用法律。\
                    <br/>现金奖励不能有任何投注要求。如果玩家希望提款，他们可以立即提款。\
                    <br/>需要选择加入。如果您希望参加促销活动，请在4月4日周三前与您的客户经理联系。\
                    <br/>必须在网站，通讯和其他媒体（包括社交媒体）上使用过关斩将锦标赛专用促销包的元素。\
                    <br/>为了符合网络推广资格，参赛游戏必须在突出的大厅位置展示。\
                    <br/>PP保留随时修改，暂停或取消促销的权利。</div>'
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://luckydraw.oriental-game.com/LUCKYDRAW/",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "",
                bannerimg: "http://luckydraw.oriental-game.com/LUCKYDRAW/assets/images/xinyun-logo.png",
                name: "东方游戏幸运抽抽乐",
                time: "2018/05",
                containtexts: '',
                containtext: ''
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "https://www.lc88drt.com/tournaments/site/40",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "",
                bannerimg: "https://www.lc88drt.com/tournaments/site/Content/Images/fg/lucky_dragoon_logo.png",
                name: "幸运之龙擂台赛",
                time: "2018/05",
                containtexts: '',
                containtext: ''
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://www.fishhuntergames.com/events/apr2018/",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "",
                bannerimg: "http://www.fishhuntergames.com/events/apr2018/img/bg.jpg",
                name: "宝箱宝宝大迁徙",
                time: "2018/04/23",
                containtexts: '',
                containtext: '在打鱼过程中,宝箱宝宝不定时在游戏中出现。只需通过点击将其抓获，可获得丰富奖金。每次金额不确定，最高多达5000元。'
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://xingaming.com/event_standalone.html",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "",
                bannerimg: "http://xingaming.com/img/event-coinBattle/banner_1920x870_ZH.jpg",
                name: "百万英雄金币王   通关翻倍天天赏",
                time: "2018/04/18",
                containtexts: '',
                containtext: '金拉霸，猛龙传奇，金龙珠，XIN哥来了'
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://www.xingaming.com/zh_event.html",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "",
                bannerimg: "http://www.xingaming.com/img/event-coinBattle/banner_1920x870_ZH.jpg",
                name: "XIN哥來了",
                time: "2018/03/26",
                containtexts: '',
                containtext: ''
            },
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://www.fishhuntergames.com/events/march2018/",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "",
                bannerimg: "http://www.fishhuntergames.com/events/march2018/img/bg.jpg",
                name: "礼金大派送",
                time: "2018/03/20",
                containtexts: '',
                containtext: ''
            },
            /*
            {
                newstype: 2,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "http://yoplay.com/news/guessredpacket/",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "",
                bannerimg: "http://yoplay.com/news/guessredpacket/img/banner.jpg",
                name: "猜红包活动",
                time: "2018/03/07",
                containtexts: '',
                containtext: ''
            },
            */
            {
                newstype: 3,
                importanttag: false,
                istopbanner: false,
                clickto: false,
                link: "javascript: void(0)",
                downloadbtn: false,
                downloadlink: "",
                mainbannerimg: "",
                bannerimg: "",
                name: "活动素材/轮播图",
                time: "无资料",
                containtexts: '',
                containtext: '无资料'
            }
        ]
    },
    watch: {
        data: function(value) {
            if (true) {
                console.log(111);
            } else {
                console.log(222);
            }
        }
    },
    methods: {
        newsnavlist: function(index) {
            this.nowlistpage = index;
            this.search = "";
            $(".newsnavlist>div>li").eq(index).addClass("active").siblings().removeClass("active");
            $("#newsPage01 .newsnavlist>div>li").eq(index).addClass("active").siblings().removeClass("active");
            $("html").getNiceScroll().resize();
            $("html").getNiceScroll().remove();
            var agent = navigator.userAgent.toLowerCase();
            if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) {} else {
                nice = $("html").niceScroll({ scrollspeed: 51, mousescrollstep: 45, cursorwidth: "5px", cursorcolor: "#222", cursorborder: "0px solid #fff" });
            };
        },
        clickindex: function(index) {
            this.showpage = index;
            if (index == this.showpage) {
                return true;
            } else {
                return false;
            }
        },
        intopagevif: function(index) {
            if (index == this.showpage) {
                return true;
            } else {
                return false;
            }
        },
        clicktoopen: function(index) {
            if (this.newss[index].clickto) {
                return "_self";
            } else {
                return "_blank";
            }
        }
    },
    computed: {
        bannerstyle_fn: function() {
            bannerstyle = this.newss.length - this.newnews;
            if (bannerstyle == 1) {
                this.slickstyle = false;
                return "bannerboxstyle_one";
            } else if (bannerstyle == 2) {
                this.slickstyle = false;
                return "bannerboxstyle_two";
            } else if (bannerstyle > 2) {
                this.slickstyle = true;
                return "bannerboxstyle_one";
            }
        },
        /*
        filterlist: function (newss){
            return this.newss.filter((news) => {
                return news.name.match(this.search);
            });
        }
        */
        filterlist: function(newss) {
            var _this = this;
            return this.newss.filter(function(news) {
                var searchtxt = news.name + news.containtexts;
                return searchtxt.match(_this.search);
            });
            /*
            $(".alertinfbox").click(function () {
                var alertboxw = $(window).width();
                if (alertboxw > 1200) { alertboxw = 1200; }
                var $form = $("#alertbox");
                $.colorbox({
                    //iframe: true,
                    inline: true,
                    href: $form,
                    width: alertboxw, //燈箱中間區塊的寬度
                });
            });
            */
        },
        /*
         filterlist: function (newss) {
             return this.newss.filter(function (news) {
                 var searchtxt = news.name + news.containtexts;
                 return searchtxt.match(this.search);
             });
         }*/
        initoutalertbox_fn0: function() {
            var alertboxw = $(window).width();
            if (alertboxw > 1200) { alertboxw = 1200; }
            var $form = $("#alertbox");
            $.colorbox({
                //iframe: true,
                inline: true,
                href: $form,
                width: alertboxw, //燈箱中間區塊的寬度
            });
        },
        initoutalertbox_fn1: function() {
            var alertboxw = $(window).width();
            if (alertboxw > 1200) { alertboxw = 1200; }
            var $form = $("#alertbox1");
            $.colorbox({
                //iframe: true,
                inline: true,
                href: $form,
                width: alertboxw, //燈箱中間區塊的寬度
            });
        }
    },
    mounted: function() {
        //设置cookie
        Vue.prototype.setCookie = function(c_name, value, expiredays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            document.cookie = c_name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
        };
        //获取cookie、
        function getCookie(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        }
        Vue.prototype.getCookie = getCookie;
        //删除cookie
        Vue.prototype.delCookie = function(name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = getCookie(name);
            if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        };
        if (!this.outwindow) {
            this.setCookie("cancelAlert", "1", 1);
        }
    }
});
