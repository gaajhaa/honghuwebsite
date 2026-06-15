// ===== 默认数据 =====
const defaultData = {
    banners: [
        { id: 1, image: 'images/placeholder.svg', title: '探索世界 感受美好', subtitle: '专业的旅游服务，为您打造难忘的旅行体验', link: '#products' },
        { id: 2, image: 'images/placeholder.svg', title: '云美云南 心之所向', subtitle: '云南旅游首选品牌，品质保障', link: '#products' },
        { id: 3, image: 'images/placeholder.svg', title: '东南亚风情之旅', subtitle: '泰国、越南、缅甸精品线路', link: '#products' }
    ],
    products: [
        { id: 1, title: '昆明-大理-丽江 深度游', destination: '云南 · 昆明、大理、丽江', price: '¥2,980起', days: '6天5晚', image: 'images/placeholder.svg', poster: '', features: ['含机票', '五星酒店', '纯玩无购物'], description: '本线路带您深度体验云南三大经典目的地', featuresDetail: ['全程五星酒店住宿', '玉龙雪山冰川公园', '洱海生态廊道骑行', '大理古城深度游', '丽江古城自由活动', '含往返机票'] },
        { id: 2, title: '西双版纳 热带雨林之旅', destination: '云南 · 西双版纳', price: '¥2,580起', days: '5天4晚', image: 'images/placeholder.svg', poster: '', features: ['含机票', '特色民宿', '亲子游'], description: '走进神秘的热带雨林', featuresDetail: ['热带植物园探秘', '野象谷寻踪', '傣族园泼水体验', '星光夜市漫步', '特色傣味美食'] },
        { id: 3, title: '泰国普吉岛 浪漫海岛游', destination: '泰国 · 普吉岛', price: '¥3,980起', days: '7天6晚', image: 'images/placeholder.svg', poster: '', features: ['含机票', '海景房', '蜜月首选'], description: '阳光、沙滩、碧海、蓝天', featuresDetail: ['芭东海滩度假', '皮皮岛一日游', '攀牙湾出海', '泰式SPA体验', '人妖秀表演', '含往返机票'] },
        { id: 4, title: '越南芽庄 休闲度假游', destination: '越南 · 芽庄', price: '¥3,280起', days: '6天5晚', image: 'images/placeholder.svg', poster: '', features: ['含机票', '五星酒店', '海鲜盛宴'], description: '芽庄，越南最美的海滨城市之一', featuresDetail: ['芽庄海滩漫步', '珍珠岛乐园', '占婆塔探秘', '泥浆浴体验', '海鲜大餐'] },
        { id: 5, title: '贵州 多彩民族风情游', destination: '贵州 · 贵阳、黄果树', price: '¥2,680起', days: '5天4晚', image: 'images/placeholder.svg', poster: '', features: ['含机票', '特色美食', '纯玩团'], description: '贵州，一个充满民族风情的地方', featuresDetail: ['黄果树瀑布', '千户苗寨', '镇远古镇', '荔波小七孔', '民族风情表演'] },
        { id: 6, title: '缅甸 神秘佛国之旅', destination: '缅甸 · 仰光、蒲甘', price: '¥4,580起', days: '8天7晚', image: 'images/placeholder.svg', poster: '', features: ['含机票', '文化探索', '深度体验'], description: '走进神秘的佛国缅甸', featuresDetail: ['仰光大金塔', '蒲甘日出热气球', '曼德勒古城', '乌本桥日落', '茵莱湖泛舟'] }
    ],
    company: {
        name: '北京鸿鹄国际旅行社有限公司',
        address: '北京市东城区兴隆街56号A801',
        phone: '010-63456151',
        email: 'hhtour@163.com',
        businessHours: '周一至周日 9:00-18:00',
        description: '北京鸿鹄国际旅行社有限公司成立于2013年，是一家专业的旅游服务企业，注册资本500万元。公司专注于国内旅游、入境旅游和出境旅游业务，尤其以云南旅游产品为核心优势。作为华北地区领先的云南旅游产品供应商，我们秉承"品质至上、服务第一"的理念，致力于为客户提供高品质、个性化的旅游体验。',
        aboutImage: 'images/placeholder.svg',
        logo: '',
        wechatQr: '',
        videoQr: '',
        stats: [
            { number: '10+', label: '年行业经验' },
            { number: '50万+', label: '服务游客' },
            { number: '200+', label: '精品线路' },
            { number: '99%', label: '客户满意度' }
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
