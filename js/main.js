// ===== 默认数据 =====
const defaultData = {
    banners: [
        { id: 1, image: 'ee6df545393945d1b328d15e09a7fbb9.jpg', title: '新疆是个好地方', subtitle: '世界之美 尽在新疆', link: '#products' },
        { id: 2, image: '9f13e043895046fe9dbbcaf1349099a1.jpg', title: '有一种叫云南的生活', subtitle: '云南旅游首选品牌，品质保障', link: '#products' },
        { id: 3, image: '66d6c97a5eac4570a4d276fd40be73bf.jpg', title: '看世界 真奇妙', subtitle: '尼泊尔 | 越南芽庄 | 老挝', link: '#products' }
    ],
    products: [
        { id: 1, title: '云南 | 纯玩大咖秀', destination: '昆明大理丽江 及延伸线路', price: '4260元起', days: '6天/8天/10天/12天', image: '6ac5e3d2e7774f5ca88f46d5d0933bcb.jpg', poster: 'c0104da80926474db078b2bd465dfff1.jpg', features: ['四钻+五钻酒店', '三表演', '纯玩团一价全含0自费'], description: '', featuresDetail: [] },
        { id: 2, title: '云南 | 喜洋洋', destination: '昆明大理丽江 及延伸线路', price: '4390元起', days: '6天/8天/10天/12天', image: 'c997b570939344a2926a6c7c354e6ae8.jpg', poster: '33e3037c6f5f4334add21df59e881206.jpg', features: ['一价全含0自费', '四钻+五钻酒店', '小团超省心'], description: '', featuresDetail: [] },
        { id: 3, title: '云南 | 六福', destination: '昆明大理丽江 及延伸线路', price: '5590元起', days: '6天/8天/10天/12天', image: '9b12859eba364171852530c16250502b.jpg', poster: '52ecefbab8b84597937c93bbb127f470.jpg', features: ['6人精品小团', '豪华五钻酒店', '保证玉龙雪山大索道'], description: '', featuresDetail: [] },
        { id: 4, title: '新疆 | 北疆大全景', destination: '北疆+伊犁+独库', price: '7299元起', days: '双飞8日', image: 'd547ac9d00b34312ad6fa41006ce3669.jpg', poster: '59f38a3776fd487faf167ece4194e05d.jpg', features: ['自组团', '专业领队', '独库公路'], description: '', featuresDetail: [] },
        { id: 5, title: '新疆 | 奢享净界', destination: '北疆+伊犁+独库', price: '10699元起', days: '双飞10日', image: 'e3c9f8fb566d48e59bd39ce92b0786f5.jpg', poster: '326d51486eeb43d0b9fd444447333feb.jpg', features: ['真纯玩', '自组团', '1+1豪华大巴'], description: '', featuresDetail: [] },
        { id: 1781504897353, title: '新疆 | 臻享北疆', destination: '北疆+伊犁 及吐鲁番', price: '7780元起', days: '双飞8日 双飞10日', image: 'beec5d4b4db34133a6a49df45c1feb90.jpg', poster: '69d0cb43a20246f786d5a4252ef4ea8b.jpg', features: ['真纯玩', '赠送旅拍', '单人免房差'], description: '', featuresDetail: [] }
    ],
    company: {
        name: '北京鸿鹄国际旅行社有限公司',
        address: '北京市东城区兴隆街56号A801',
        phone: '010-63456151',
        email: 'hhtour@163.com',
        businessHours: '周一至周五 9:00-18:00',
        description: '北京鸿鹄国际旅行社有限公司（简称鸿鹄旅游）创立于 2014 年 10 月，由行业精英管理团队与资深创始人打造。总部位于北京东城区崇文门核心商圈，是股份制企业，注册资金 500 万元。 业务涵盖国内游、出境游、入境旅游，以及航空机票代理、会议服务等。秉承开拓创新精神，在国内外设有 10 家驻外办事处及分支机构，销售网络覆盖京津冀辽区县。 公司成立早期以云南旅游起步，逐步开发国内多处目的地。2015 年进军出境中短途度假包机市场，参与多个包机项目。 经过十年发展，凭借强大资源整合与渠道运营能力，已成华北市场知名旅游产品批发商与渠道运营商。公司致力于汇聚旅游人才，整合优势资源，打造优质产品代理商与渠道经销商。公司坚持客户至上，提升服务质量，满足多样需求。鸿鹄旅游将不懈追求卓越、创新，为客户与合作伙伴创造更大价值，共迎美好未来。',
        aboutImage: '8f2a52968d5345a5a9cf0c77c8799938.jpg',
        logo: '4065f4cd53c84f08894b3913b35823ce.png',
        wechatQr: 'a3d935bdf307406a94f9dc49659ed712.jpg',
        videoQr: '5acfae738cde47eb9faa1d53883e78c5.jpg',
        announcement: '欢迎访问北京鸿鹄国际旅行社官方网站。我司作为专业的旅游产品供应商，本网站旨在展示云南、新疆、尼泊尔等热门线路的详细信息。网站内容不直接面向游客提供咨询或预订服务。若您对展示的线路感兴趣，可前往您身边的任何一家旅行社门店进行咨询，我们已与绝大多数旅行社建立了良好的合作关系，以确保为您提供无缝对接的服务体验。',
        stats: [
            { number: '10+', label: '年行业经验' },
            { number: '50万+', label: '服务游客' },
            { number: '200+', label: '精品线路' },
            { number: '99%+', label: '客户满意度' }
        ]
    }
};

// ===== 图片路径辅助 =====
function imgSrc(filename) {
    if (!filename) return 'images/placeholder.svg';
    if (filename.startsWith('http') || filename.startsWith('data:')) return filename;
    return 'images/' + filename;
}

// ===== 数据归一化 =====
function normalizeData(data) {
    if (!data || typeof data !== 'object') return JSON.parse(JSON.stringify(defaultData));
    data.banners = Array.isArray(data.banners) ? data.banners : [];
    data.products = Array.isArray(data.products) ? data.products : [];
    data.products.forEach(function(p) {
        if (typeof p.poster === 'undefined') p.poster = '';
        if (!Array.isArray(p.features)) p.features = [];
        if (!Array.isArray(p.featuresDetail)) p.featuresDetail = [];
        if (!p.description) p.description = '';
        if (!p.image) p.image = '';
    });
    if (!data.company || typeof data.company !== 'object') {
        data.company = JSON.parse(JSON.stringify(defaultData.company));
    } else {
        var dc = defaultData.company;
        var c = data.company;
        for (var k in dc) {
            if (typeof c[k] === 'undefined') {
                c[k] = Array.isArray(dc[k]) ? JSON.parse(JSON.stringify(dc[k])) : dc[k];
            }
        }
        if (!Array.isArray(c.stats)) c.stats = [];
        if (typeof c.logo === 'undefined') c.logo = '';
        if (typeof c.wechatQr === 'undefined') c.wechatQr = '';
        if (typeof c.videoQr === 'undefined') c.videoQr = '';
        if (typeof c.aboutImage === 'undefined') c.aboutImage = '';
    }
    return data;
}

// ===== 读取数据（优先API，降级localStorage，最后默认） =====
async function getWebsiteData() {
    // 优先从 data.json 文件读取（本地和 GitHub Pages 都支持）
    try {
        var resp = await fetch('data.json');
        if (resp.ok) {
            var json = await resp.json();
            if (json && json.banners) {
                return normalizeData(json);
            }
        }
    } catch (e) {
        console.warn('data.json读取失败：', e.message);
    }
    // 兼容本地 Flask 服务器
    try {
        var resp2 = await fetch('/api/data');
        if (resp2.ok) {
            var json2 = await resp2.json();
            if (json2 && json2.banners) {
                return normalizeData(json2);
            }
        }
    } catch (e) {}
    // 降级：localStorage
    var stored = localStorage.getItem('hh_website_content');
    if (stored) {
        try {
            return normalizeData(JSON.parse(stored));
        } catch (e) {}
    }
    return JSON.parse(JSON.stringify(defaultData));
}

// ===== 将图片字段解析为实际 URL =====
function resolveImageUrls(data) {
    if (Array.isArray(data.banners)) {
        data.banners.forEach(function(b) { b.image = imgSrc(b.image); });
    }
    if (Array.isArray(data.products)) {
        data.products.forEach(function(p) {
            p.image = imgSrc(p.image);
            p.poster = imgSrc(p.poster);
        });
    }
    if (data.company) {
        ['aboutImage', 'logo', 'wechatQr', 'videoQr'].forEach(function(f) {
            data.company[f] = imgSrc(data.company[f]);
        });
    }
    return data;
}

// ===== Logo渲染 =====
function renderLogo(data) {
    var logoImage = document.getElementById('logoImage');
    var logoTextFallback = document.getElementById('logoTextFallback');
    if (data.company.logo && data.company.logo !== 'images/placeholder.svg') {
        logoImage.src = data.company.logo;
        logoImage.style.display = 'block';
        logoTextFallback.style.display = 'none';
    } else {
        logoImage.style.display = 'none';
        logoTextFallback.style.display = 'flex';
    }
}

// ===== 导航菜单切换 =====
function toggleMenu() { document.querySelector('.nav-links').classList.toggle('active'); }

// ===== Banner轮播 =====
var currentSlide = 0, slides = [], dots = [];

function renderBanners(banners) {
    try {
        var list = Array.isArray(banners) && banners.length > 0 ? banners : [{ image: '', title: '探索世界 感受美好', subtitle: '专业的旅游服务，为您打造难忘的旅行体验', link: '#products' }];
        document.getElementById('heroSlides').innerHTML = list.map(function(b, i) {
            return '<div class="hero-slide ' + (i === 0 ? 'active' : '') + '">' +
                '<img src="' + (b.image || '') + '" alt="' + (b.title || '') + '">' +
                '<div class="hero-overlay">' +
                    '<h1 class="hero-title">' + (b.title || '') + '</h1>' +
                    '<p class="hero-subtitle">' + (b.subtitle || '') + '</p>' +
                    '<a href="' + (b.link || '#products') + '" class="hero-btn">浏览产品</a>' +
                '</div></div>';
        }).join('');
        document.getElementById('heroDots').innerHTML = list.map(function(_, i) {
            return '<span class="hero-dot ' + (i === 0 ? 'active' : '') + '" onclick="goToSlide(' + i + ')"></span>';
        }).join('');
        slides = document.querySelectorAll('.hero-slide');
        dots = document.querySelectorAll('.hero-dot');
    } catch (err) { console.error('渲染Banner失败：', err); }
}

function goToSlide(index) {
    try {
        if (!slides || slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        if (dots && dots[currentSlide]) dots[currentSlide].classList.remove('active');
        currentSlide = index % slides.length;
        slides[currentSlide].classList.add('active');
        if (dots && dots[currentSlide]) dots[currentSlide].classList.add('active');
    } catch (err) { console.error('切换Banner失败：', err); }
}

function startSlideshow() {
    if (!slides || slides.length <= 1) return;
    setInterval(function() { goToSlide((currentSlide + 1) % slides.length); }, 5000);
}

// ===== 产品列表 =====
function renderProducts(products) {
    try {
        var list = Array.isArray(products) ? products : [];
        if (list.length === 0) {
            document.getElementById('productsGrid').innerHTML = '<p style="color:#999;text-align:center;grid-column:1/-1;">暂无产品，请在后台添加</p>';
            return;
        }
        document.getElementById('productsGrid').innerHTML = list.map(function(p) {
            return '<div class="product-card" onclick="openModal(' + p.id + ')">' +
                '<div class="product-image"><img src="' + (p.image || '') + '" alt="' + (p.title || '') + '"></div>' +
                '<div class="product-info">' +
                    '<h3 class="product-title">' + (p.title || '') + '</h3>' +
                    '<p class="product-destination">' + (p.destination || '') + '</p>' +
                    '<p class="product-price">' + (p.price || '') + '</p>' +
                    '<p class="product-days">' + (p.days || '') + '</p>' +
                    '<div class="product-features">' + (p.features || []).map(function(f) { return '<span class="feature-tag">' + f + '</span>'; }).join('') + '</div>' +
                    '<a href="#" class="product-btn" onclick="event.stopPropagation(); openModal(' + p.id + ');">查看海报</a>' +
                '</div></div>';
        }).join('');
    } catch (err) { console.error('渲染产品列表失败：', err); }
}

// ===== 产品海报弹窗 =====
var posterState = { scale: 1, tx: 0, ty: 0, isDragging: false, startX: 0, startY: 0, productData: {} };

function applyPosterTransform() {
    var img = document.getElementById('modalImage');
    if (!img) return;
    img.style.transform = 'translate(' + posterState.tx + 'px,' + posterState.ty + 'px) scale(' + posterState.scale + ')';
}

function resetPosterState() {
    posterState.scale = 1;
    posterState.tx = 0;
    posterState.ty = 0;
    var img = document.getElementById('modalImage');
    if (img) img.style.transform = '';
}

function openModal(productId) {
    var p = posterState.productData[productId];
    if (!p) return;
    document.getElementById('modalImage').src = (p.poster && p.poster !== 'images/placeholder.svg') ? p.poster : p.image;
    resetPosterState();
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
    resetPosterState();
}

document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === document.getElementById('productModal') ||
        (e.target.classList && e.target.classList.contains('poster-viewer'))) {
        closeModal();
    }
});

document.getElementById('posterViewer').addEventListener('wheel', function(e) {
    e.preventDefault();
    var img = document.getElementById('modalImage');
    if (!img) return;
    var rect = img.getBoundingClientRect();
    var cx = e.clientX - rect.left;
    var cy = e.clientY - rect.top;
    var delta = e.deltaY < 0 ? 1.1 : 0.9;
    var nextScale = Math.min(10, Math.max(0.2, posterState.scale * delta));
    var factor = nextScale / posterState.scale;
    posterState.tx = (posterState.tx - cx) * factor + cx;
    posterState.ty = (posterState.ty - cy) * factor + cy;
    posterState.scale = nextScale;
    applyPosterTransform();
}, { passive: false });

document.getElementById('posterViewer').addEventListener('mousedown', function(e) {
    if (e.target.classList && e.target.classList.contains('modal-close')) return;
    posterState.isDragging = true;
    posterState.startX = e.clientX - posterState.tx;
    posterState.startY = e.clientY - posterState.ty;
    this.classList.add('dragging');
});

window.addEventListener('mousemove', function(e) {
    if (!posterState.isDragging) return;
    posterState.tx = e.clientX - posterState.startX;
    posterState.ty = e.clientY - posterState.startY;
    applyPosterTransform();
});

window.addEventListener('mouseup', function() {
    if (posterState.isDragging) {
        posterState.isDragging = false;
        var viewer = document.getElementById('posterViewer');
        if (viewer) viewer.classList.remove('dragging');
    }
});

document.getElementById('posterViewer').addEventListener('dblclick', function() {
    if (posterState.scale !== 1) { resetPosterState(); }
    else { posterState.scale = 1.8; posterState.tx = 0; posterState.ty = 0; applyPosterTransform(); }
});

document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

// ===== 公告栏渲染 =====
function renderAnnouncement(company) {
    try {
        var text = (company && company.announcement) || '';
        var el = document.getElementById('announcementText');
        if (!el) return;
        if (!text) { el.style.display = 'none'; return; }
        el.style.display = 'inline-block';
        // 单份文字写入，副本由 CSS ::after 拼接实现无缝滚动
        el.setAttribute('data-text', text);
        el.innerHTML = text;
    } catch (err) { console.error('渲染公告栏失败：', err); }
}

// ===== 关于我们 =====
function renderAbout(company) {
    try {
        document.getElementById('aboutText').innerHTML = '<p>' + ((company && company.description) || '') + '</p>';
        var aboutImg = (company && company.aboutImage) || '';
        document.getElementById('aboutImage').innerHTML = aboutImg ? '<img src="' + aboutImg + '" alt="公司形象">' : '';
        var stats = (company && Array.isArray(company.stats)) ? company.stats : [];
        document.getElementById('statsGrid').innerHTML = stats.map(function(s) {
            return '<div class="stat-item"><div class="stat-number">' + s.number + '</div><div class="stat-label">' + s.label + '</div></div>';
        }).join('');
    } catch (err) { console.error('渲染关于我们失败：', err); }
}

// ===== 联系我们 + 二维码 =====
function renderContact(company) {
    try {
        document.getElementById('contactInfo').innerHTML =
            '<div class="contact-item"><div class="contact-icon">📍</div><div><h4>公司地址</h4><p class="contact-text">' + (company.address || '') + '</p></div></div>' +
            '<div class="contact-item"><div class="contact-icon">📞</div><div><h4>联系电话</h4><p class="contact-text">' + (company.phone || '') + '</p></div></div>' +
            '<div class="contact-item"><div class="contact-icon">✉️</div><div><h4>电子邮箱</h4><p class="contact-text">' + (company.email || '') + '</p></div></div>' +
            '<div class="contact-item"><div class="contact-icon">🕐</div><div><h4>营业时间</h4><p class="contact-text">' + (company.businessHours || '') + '</p></div></div>';

        var placeholder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23f5f5f5"/><text x="50%" y="50%" text-anchor="middle" fill="%23999" font-size="16" dy=".3em">请上传二维码</text></svg>';
        var wechatQr = document.getElementById('wechatQrImage');
        var videoQr = document.getElementById('videoQrImage');
        wechatQr.src = (company.wechatQr && company.wechatQr !== 'images/placeholder.svg') ? company.wechatQr : placeholder;
        videoQr.src = (company.videoQr && company.videoQr !== 'images/placeholder.svg') ? company.videoQr : placeholder;
    } catch (err) { console.error('渲染联系我们失败：', err); }
}

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        var t = document.querySelector(a.getAttribute('href'));
        if (t) { t.scrollIntoView({ behavior: 'smooth' }); document.querySelector('.nav-links').classList.remove('active'); }
    });
});

// ===== 导航栏滚动效果 =====
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.style.background = '#ffffff';
    navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 18px rgba(0, 0, 0, 0.12)' : '0 2px 12px rgba(0, 0, 0, 0.08)';
});

// ===== 初始化 =====
async function init() {
    var d = await getWebsiteData();
    (d.products || []).forEach(function(p) { posterState.productData[p.id] = p; });
    d = resolveImageUrls(d);
    renderLogo(d);
    renderBanners(d.banners);
    renderProducts(d.products);
    renderAnnouncement(d.company);
    renderAbout(d.company);
    renderContact(d.company);
    startSlideshow();
}
init();
