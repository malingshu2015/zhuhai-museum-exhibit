"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card, Navbar, Nav, Tab, Tabs, Button, Modal, Form } from 'react-bootstrap';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedArtifact, setSelectedArtifact] = useState<any>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // 滚动监听 - 返回顶部按钮和滚动动画
  useEffect(() => {
    const handleScroll = () => {
      // 返回顶部按钮显示/隐藏
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // 滚动动画 - 检查元素是否进入视口
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, observerOptions);

      // 观察所有需要动画的元素
      const animatedElements = document.querySelectorAll('.fade-in-section, .intro-card-modern, .artifact-card, .visit-card, .timeline-item');
      animatedElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll);
    // 初始检查一次
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const artifacts = [
    {
      id: 1,
      title: "金饼",
      category: "gold",
      period: "西汉",
      description: "汉代贵族财富的象征，用于储藏和赏赐。海昏侯墓出土的金器数量惊人，共出土金饼385枚，总重量超过80公斤，是汉代考古之最。",
      details: "这些金饼呈圆形，直径约6-7厘米，厚度约1厘米，每枚重约250克。金饼表面刻有文字和符号，记录了重量、制造者等信息，反映了汉代高度发达的金属加工工艺和严格的度量制度。金饼出土时整齐排列在主椁室西侧，展现了西汉王侯的巨额财富。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/8dd6fbbb11754f14a4d25d4500d831a7.jpg",
      era: "公元前1世纪",
      color: "#a67c52"
    },
    {
      id: 2,
      title: "褭蹏金",
      category: "gold",
      period: "西汉",
      description: "上书「上」、「中」、「下」三种文字，是西汉时期的称量货币，也是皇室的象征。海昏侯墓出土马蹄金48枚。",
      details: "每件马蹄金底部刻有「上」、「中」、「下」字样，代表不同等级。马蹄金形状独特，底部呈马蹄形，顶部平整。这些金器不仅具有极高的历史价值，也展现了汉代精湛的金属铸造工艺。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/dc26656a23384e4c9f34be3c1d665afa.jpg",
      era: "公元前1世纪",
      color: "#a67c52"
    },
    {
      id: 3,
      title: "麟趾金",
      category: "gold",
      period: "西汉",
      description: "形似兽蹄的黄金货币，与马蹄金同为汉代皇室专用。海昏侯墓出土麟趾金25枚。",
      details: "麟趾金形似兽蹄,制作精美。这些金器不仅具有极高的历史价值，也展现了汉代精湛的金属铸造工艺。麟趾金与马蹄金共同构成了汉代独特的黄金货币体系。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/9386b54b85294fc6b6ab9b06cddba6c9.jpg",
      era: "公元前1世纪",
      color: "#a67c52"
    },
    {
      id: 4,
      title: "凤鸟纹玉耳杯",
      category: "jade",
      period: "西汉",
      description: "精美的玉质耳杯，杯身雕刻凤鸟纹饰，是汉代贵族宴饮时使用的高档酒器。",
      details: "这件玉耳杯玉质温润，雕工精湛，凤鸟纹饰栩栩如生。玉器在汉代社会中具有重要地位，既是礼仪用品，也是身份地位的象征。反映了墓主人尊贵的地位和汉代高超的玉器加工技术。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/651daa5388ac42b5994349a9224b7361.jpg",
      era: "公元前1世纪",
      color: "#6b8e7f"
    },
    {
      id: 5,
      title: "玉璧",
      category: "jade",
      period: "西汉",
      description: "玉璧是古代重要的礼器，象征天命和权力。海昏侯墓出土的玉璧制作精良，纹饰精美，材质多为和田玉。",
      details: "玉璧呈圆形，中间有圆孔，表面刻有谷纹、蒲纹等精美纹饰。玉璧在汉代社会中具有重要地位，既是礼仪用品，也是身份地位的象征。出土的玉璧数量多、质量高，温润剔透，反映了墓主人尊贵的地位和汉代高超的玉器加工技术。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/d66476d7e81d4d8b882abcfa60c6dfbe.jpg",
      era: "公元前1世纪",
      color: "#6b8e7f"
    },
    {
      id: 6,
      title: "玉剑格",
      category: "jade",
      period: "西汉",
      description: "玉剑格是剑柄与剑身之间的玉饰，既是实用部件，也是身份象征。",
      details: "这件玉剑格制作精良，纹饰精美，展现了汉代高超的玉器加工工艺。玉制剑饰是汉代贵族佩剑的重要组成部分，体现了佩戴者的尊贵身份。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/16b36ad3b9be457bbe367978dca6335c.jpg",
      era: "公元前1世纪",
      color: "#6b8e7f"
    },
    {
      id: 7,
      title: "人形青铜镇",
      category: "bronze",
      period: "西汉",
      description: "造型独特的青铜席镇，用于压住席子四角，防止卷起。人形造型生动传神。",
      details: "这件人形青铜镇造型独特，工艺精湛。席镇是汉代贵族生活中常见的实用器物，既能压住席角，又具有装饰作用。体现了汉代工匠卓越的创造力和精湛的青铜铸造技术。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/ab3203f0329f4771a9e98e1279dd4163.jpg",
      era: "公元前1世纪",
      color: "#8b6f5c"
    },
    {
      id: 8,
      title: "神兽形青铜虡座",
      category: "bronze",
      period: "西汉",
      description: "用于悬挂编钟的青铜底座，神兽造型威武庄重，展现了汉代礼乐制度的恢弘气象。",
      details: "神兽形青铜虡座造型威武，纹饰精美，是悬挂编钟的重要组件。这类器物体现了汉代王侯「钟鸣鼎食」的奢华生活和严格的礼乐制度，展现了汉代高度发达的青铜铸造技术和艺术水平。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/02e4776f20c3406284505d18ce6274f7.jpg",
      era: "公元前1世纪",
      color: "#8b6f5c"
    },
    {
      id: 9,
      title: "神兽形青铜虡座(二)",
      category: "bronze",
      period: "西汉",
      description: "另一件神兽形青铜虡座，造型与工艺相得益彰，共同构成完整的编钟悬挂系统。",
      details: "这件神兽形青铜虡座与另一件成对出现，造型协调统一，展现了汉代工匠对器物组合的精心设计。这类礼乐用具是研究汉代礼乐制度和音乐艺术的重要实物资料。",
      imgSrc: "https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/da5a06a29a5c4966bc618422c8623d71.jpg",
      era: "公元前1世纪",
      color: "#8b6f5c"
    }
  ];

  const timeline = [
    { year: "公元前104年", event: "刘贺出生", description: "汉武帝之孙，昌邑王刘髆之子" },
    { year: "公元前74年", event: "刘贺即位", description: "汉昭帝去世，刘贺被霍光迎立为帝，在位仅27天" },
    { year: "公元前63年", event: "封海昏侯", description: "汉宣帝封刘贺为海昏侯，食邑四千户" },
    { year: "公元前59年", event: "刘贺去世", description: "刘贺死于豫章郡海昏县，葬于今江西南昌" },
    { year: "2011年", event: "墓葬发现", description: "江西省文物考古研究所发现海昏侯墓园" },
    { year: "2015年", event: "主墓发掘", description: "出土文物1万余件，包括大量金器、玉器、青铜器" },
    { year: "2025年", event: "珠海特展", description: "珠海博物馆举办海昏侯出土文物特展" }
  ];

  // 历史人物数据
  const historicalFigures = [
    {
      id: 1,
      name: "刘贺",
      title: "汉废帝 / 海昏侯",
      lifespan: "公元前104年 - 公元前59年",
      image: "/historical-figures/liu-he.jpg",
      description: "西汉第九位皇帝，昌邑王刘髆之子，汉武帝之孙。在位仅27天，后被废为海昏侯。其墓葬出土文物震惊世界，为研究西汉列侯制度提供了珍贵实物资料。",
      achievements: [
        "汉武帝之孙，昌邑王刘髆之子",
        "公元前74年即位为帝，在位仅27天",
        "被霍光废黜，封为海昏侯",
        "其墓葬出土金器478件，合计115公斤黄金"
      ],
      color: "#a67c52"
    },
    {
      id: 2,
      name: "霍光",
      title: "大司马大将军",
      lifespan: "? - 公元前68年",
      image: "/historical-figures/huo-guang.jpg",
      description: "西汉权臣，历经汉武帝、汉昭帝、汉宣帝三朝，废立皇帝,权倾朝野。主持废黜刘贺，拥立汉宣帝。麒麟阁十一功臣之首,被誉为汉代第一权臣。",
      achievements: [
        "历经汉武帝、汉昭帝、汉宣帝三朝",
        "受汉武帝遗诏辅政",
        "废黜刘贺,拥立汉宣帝刘询",
        "麒麟阁十一功臣画像首位"
      ],
      color: "#8b3a3a"
    },
    {
      id: 3,
      name: "汉武帝",
      title: "西汉第七位皇帝",
      lifespan: "公元前156年 - 公元前87年",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/%E4%B8%89%E6%89%8D%E5%9C%96%E6%9C%83_%E6%BC%A2%E6%AD%A6%E5%B8%9D%E5%8A%89%E5%BE%B9%E7%9B%B8.jpg/400px-%E4%B8%89%E6%89%8D%E5%9C%96%E6%9C%83_%E6%BC%A2%E6%AD%A6%E5%B8%9D%E5%8A%89%E5%BE%B9%E7%9B%B8.jpg",
      description: "刘彻，西汉第七位皇帝，在位54年，开创了西汉盛世。刘贺的祖父，其政治制度和思想对汉代影响深远。是中国历史上最具影响力的皇帝之一。",
      achievements: [
        "开创丝绸之路，促进中西文化交流",
        "推行罢黜百家，独尊儒术",
        "设立太学，培养儒家人才",
        "开创汉武盛世，国力达到鼎盛"
      ],
      color: "#8b6f5c"
    },
    {
      id: 4,
      name: "汉宣帝",
      title: "西汉第十位皇帝",
      lifespan: "公元前91年 - 公元前49年",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/%E6%B1%89%E5%AE%A3%E5%B8%9D%E5%83%8F.jpg/400px-%E6%B1%89%E5%AE%A3%E5%B8%9D%E5%83%8F.jpg",
      description: "刘询，原名刘病已，汉武帝曾孙。在霍光废黜刘贺后被拥立为帝，开创了\"孝宣之治\"的盛世局面。西汉国力在其治下最为强盛，史称\"孝宣中兴\"。",
      achievements: [
        "霍光废黜刘贺后被拥立为帝",
        "削弱霍氏势力，亲理朝政",
        "开创\"孝宣之治\"盛世局面",
        "设置西域都护，政令颁于西域"
      ],
      color: "#6b8e7f"
    }
  ];

  // 搜索过滤函数
  const filteredArtifacts = artifacts.filter(artifact => {
    // 首先按类别过滤(基于activeTab)
    if (activeTab !== 'all' && artifact.category !== activeTab) {
      return false;
    }

    // 然后按搜索词过滤
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    return (
      artifact.title.toLowerCase().includes(searchLower) ||
      artifact.description.toLowerCase().includes(searchLower) ||
      artifact.period.toLowerCase().includes(searchLower) ||
      artifact.category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            <span style={{ color: '#a67c52' }}>珠海博物馆</span> 海昏侯特展
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link-custom">首页</Nav.Link>
              <Nav.Link href="#introduction" className="nav-link-custom">展览简介</Nav.Link>
              <Nav.Link href="#figures" className="nav-link-custom">历史人物</Nav.Link>
              <Nav.Link href="#artifacts" className="nav-link-custom">文物珍品</Nav.Link>
              <Nav.Link href="#timeline" className="nav-link-custom">历史脉络</Nav.Link>
              <Nav.Link href="#visit-info" className="nav-link-custom">参观指南</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <div className="hero-badge">2025年度特别展览</div>
          <h1 className="hero-title">千年汉韵</h1>
          <h2 className="hero-subtitle">海昏侯刘贺墓出土文物特展</h2>
          <p className="hero-description">
            探索西汉王侯的奢华生活，感受两千年前的汉风雅韵
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">83+</div>
              <div className="stat-label">珍贵文物</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">年历史</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1st</div>
              <div className="stat-label">考古发现</div>
            </div>
          </div>
          <button
            size="lg"
            className="hero-button mt-4"
            onClick={() => document.getElementById('artifacts')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '15px 50px',
              fontSize: '1.2rem',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #8b3a3a 0%, #a63a3a 100%)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(139, 58, 58, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 58, 58, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 58, 58, 0.4)';
            }}
          >
            探索文物
          </button>
        </Container>
      </header>

      <section id="introduction" className="introduction-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="section-badge">关于展览</span>
            <h2 className="section-title">探索千年文明</h2>
            <p className="section-subtitle">About The Exhibition</p>
          </div>
          <Row className="g-4">
            <Col lg={6} className="mb-4">
              <Card className="intro-card-modern h-100">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop"
                  alt="古建筑"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <h3 className="intro-title-modern mb-3">豫章海昏</h3>
                  <div className="intro-content-modern">
                    <p className="mb-3">
                      <strong>地理位置：</strong>位于今江西省南昌市新建区
                    </p>
                    <p className="mb-3">
                      <strong>墓主身份：</strong>刘贺，汉武帝之孙，历经王、皇、侯三种身份
                    </p>
                    <p className="mb-3">
                      <strong>墓葬规模：</strong>占地约4万平方米，包含两座主墓、七座陪葬墓
                    </p>
                    <p className="mb-0">
                      <strong>历史价值：</strong>是我国迄今为止发现的保存最好、结构最完整的西汉列侯等级墓葬园
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="intro-card-modern h-100">
                <Card.Img
                  variant="top"
                  src="https://www.zhmuseum.org.cn/zhmuseum/uploadTest/wangEditor/8dd6fbbb11754f14a4d25d4500d831a7.jpg"
                  alt="金饼"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <h3 className="intro-title-modern mb-3">王侯威仪</h3>
                  <div className="intro-content-modern">
                    <p className="mb-3">
                      <strong>金器珍宝：</strong>总重量超过80公斤，包括金饼385枚、褭蹏金48枚、麟趾金25枚
                    </p>
                    <p className="mb-3">
                      <strong>玉器精品：</strong>玉耳杯、玉璧、玉剑格等，温润剔透，雕工精湛
                    </p>
                    <p className="mb-3">
                      <strong>青铜重器：</strong>编钟、鼎、壶、镇、虡座等礼乐用具，制作精美
                    </p>
                    <p className="mb-0">
                      <strong>历史意义：</strong>展现了王侯"钟鸣鼎食"的尊贵地位和奢华生活
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="intro-card-modern h-100">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop"
                  alt="古代文献"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <h3 className="intro-title-modern mb-3">儒风南阜</h3>
                  <div className="intro-content-modern">
                    <p className="mb-3">
                      <strong>简牍数量：</strong>竹简5200多枚、木牍近百版
                    </p>
                    <p className="mb-3">
                      <strong>经典文献：</strong>出土《论语》、《易经》、《礼记》等儒家经典竹简
                    </p>
                    <p className="mb-3">
                      <strong>文献价值：</strong>《论语》简是我国迄今为止出土的最早版本
                    </p>
                    <p className="mb-0">
                      <strong>书法艺术：</strong>简牍文字清晰、书法优美，是汉代隶书艺术的杰出代表
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="intro-card-modern h-100">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1000&auto=format&fit=crop"
                  alt="考古发掘现场"
                  style={{ height: '240px', objectFit: 'cover' }}
                />
                <Card.Body className="p-4">
                  <h3 className="intro-title-modern mb-3">考古意义</h3>
                  <div className="intro-content-modern">
                    <p className="mb-3">
                      <strong>重要荣誉：</strong>2015年中国六大考古新发现、2015年中国十大考古新发现
                    </p>
                    <p className="mb-3">
                      <strong>出土文物：</strong>1万余件(套)，包括金器、玉器、青铜器、简牍等
                    </p>
                    <p className="mb-3">
                      <strong>学术价值：</strong>填补了西汉列侯等级墓葬研究的空白
                    </p>
                    <p className="mb-0">
                      <strong>历史意义：</strong>是一部立体的汉代历史百科全书
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 历史人物介绍区块 */}
      <section id="figures" className="figures-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="section-badge">历史人物</span>
            <h2 className="section-title">汉代风云人物</h2>
            <p className="section-subtitle">Historical Figures</p>
          </div>
          <Row className="g-4">
            {historicalFigures.map((figure) => (
              <Col lg={3} md={6} key={figure.id}>
                <Card className="figure-card fade-in-section">
                  <div className="figure-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={figure.image}
                      alt={figure.name}
                      className="figure-image"
                    />
                    <div className="figure-overlay" style={{ background: figure.color }}>
                      <div className="figure-overlay-content">
                        <h4 className="figure-overlay-title">{figure.title}</h4>
                        <p className="figure-overlay-lifespan">{figure.lifespan}</p>
                      </div>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <h3 className="figure-name">{figure.name}</h3>
                    <p className="figure-description">{figure.description}</p>
                    <div className="figure-achievements">
                      <h5 className="achievements-title">主要事迹：</h5>
                      <ul className="achievements-list">
                        {figure.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 文物统计图表区块 */}
      <section className="stats-chart-section fade-in-section">
        <Container>
          <div className="chart-container">
            <h2 className="chart-title">文物类别统计</h2>
            <div className="chart-wrapper">
              <div className="chart-bar">
                <div className="bar-wrapper">
                  <div
                    className="bar-fill"
                    style={{
                      height: '85%',
                      background: 'linear-gradient(135deg, #a67c52 0%, #c9985b 100%)'
                    }}
                  >
                    <div className="bar-value">458</div>
                  </div>
                </div>
                <div className="bar-label">金器</div>
              </div>

              <div className="chart-bar">
                <div className="bar-wrapper">
                  <div
                    className="bar-fill"
                    style={{
                      height: '65%',
                      background: 'linear-gradient(135deg, #6b8e7f 0%, #8ba89a 100%)'
                    }}
                  >
                    <div className="bar-value">350</div>
                  </div>
                </div>
                <div className="bar-label">玉器</div>
              </div>

              <div className="chart-bar">
                <div className="bar-wrapper">
                  <div
                    className="bar-fill"
                    style={{
                      height: '75%',
                      background: 'linear-gradient(135deg, #8b6f5c 0%, #a88f7c 100%)'
                    }}
                  >
                    <div className="bar-value">400</div>
                  </div>
                </div>
                <div className="bar-label">青铜器</div>
              </div>

              <div className="chart-bar">
                <div className="bar-wrapper">
                  <div
                    className="bar-fill"
                    style={{
                      height: '55%',
                      background: 'linear-gradient(135deg, #8b3a3a 0%, #a85555 100%)'
                    }}
                  >
                    <div className="bar-value">292</div>
                  </div>
                </div>
                <div className="bar-label">简牍</div>
              </div>
            </div>

            <div className="bar-legend">
              <div className="legend-item">
                <div className="legend-color" style={{ background: 'linear-gradient(135deg, #a67c52 0%, #c9985b 100%)' }}></div>
                <span className="legend-text">金器 (458件)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: 'linear-gradient(135deg, #6b8e7f 0%, #8ba89a 100%)' }}></div>
                <span className="legend-text">玉器 (350件)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: 'linear-gradient(135deg, #8b6f5c 0%, #a88f7c 100%)' }}></div>
                <span className="legend-text">青铜器 (400件)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: 'linear-gradient(135deg, #8b3a3a 0%, #a85555 100%)' }}></div>
                <span className="legend-text">简牍 (292件)</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="artifacts" className="artifacts-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="section-badge">文物珍品</span>
            <h2 className="section-title">稀世珍宝</h2>
            <p className="section-subtitle">Artifacts Collection</p>
          </div>

          {/* 搜索框 */}
          <div className="search-container fade-in-section">
            <div className="search-input-wrapper">
              <Form.Control
                type="text"
                placeholder="搜索文物名称、年代或类别..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>
            {searchTerm && (
              <div className="text-center mt-3">
                <span className="search-results-info">
                  找到 {filteredArtifacts.length} 件相关文物
                </span>
              </div>
            )}
          </div>

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k || 'all')}
            className="justify-content-center mb-4 filter-tabs"
          >
            <Tab eventKey="all" title="全部文物">
              <Row className="g-4 mt-3">
                {filteredArtifacts.length > 0 ? (
                  filteredArtifacts.map((artifact) => (
                    <Col lg={4} md={6} key={artifact.id}>
                      <Card className="artifact-card h-100" onClick={() => setSelectedArtifact(artifact)}>
                        <div className="position-relative">
                          <Card.Img
                            variant="top"
                            src={artifact.imgSrc}
                            alt={artifact.title}
                            style={{ height: '250px', objectFit: 'cover' }}
                          />
                          <div className="category-badge" style={{ background: artifact.color, top: '15px', right: '15px' }}>
                            {artifact.category === 'gold' && '金器'}
                            {artifact.category === 'bronze' && '青铜器'}
                            {artifact.category === 'jade' && '玉器'}
                          </div>
                        </div>
                        <Card.Body>
                          <div className="artifact-meta">
                            <span className="period-badge" style={{ background: artifact.color }}>{artifact.period}</span>
                            <span className="era-badge">{artifact.era}</span>
                          </div>
                          <Card.Title className="artifact-title">{artifact.title}</Card.Title>
                          <Card.Text className="artifact-description">{artifact.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col xs={12}>
                    <div className="no-results">
                      <div className="no-results-icon">🔍</div>
                      <p>未找到匹配的文物</p>
                      <p className="text-muted">请尝试其他关键词或清除搜索条件</p>
                    </div>
                  </Col>
                )}
              </Row>
            </Tab>
            <Tab eventKey="gold" title="金器">
              <Row className="g-4 mt-3">
                {filteredArtifacts.map((artifact) => (
                  <Col lg={4} md={6} key={artifact.id}>
                    <Card className="artifact-card h-100" onClick={() => setSelectedArtifact(artifact)}>
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={artifact.imgSrc}
                          alt={artifact.title}
                          style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <div className="category-badge" style={{ background: '#a67c52', top: '15px', right: '15px' }}>金器</div>
                      </div>
                      <Card.Body>
                        <div className="artifact-meta">
                          <span className="period-badge" style={{ background: '#a67c52' }}>{artifact.period}</span>
                          <span className="era-badge">{artifact.era}</span>
                        </div>
                        <Card.Title className="artifact-title">{artifact.title}</Card.Title>
                        <Card.Text className="artifact-description">{artifact.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="bronze" title="青铜器">
              <Row className="g-4 mt-3">
                {filteredArtifacts.map((artifact) => (
                  <Col lg={4} md={6} key={artifact.id}>
                    <Card className="artifact-card h-100" onClick={() => setSelectedArtifact(artifact)}>
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={artifact.imgSrc}
                          alt={artifact.title}
                          style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <div className="category-badge" style={{ background: '#8b6f5c', top: '15px', right: '15px' }}>青铜器</div>
                      </div>
                      <Card.Body>
                        <div className="artifact-meta">
                          <span className="period-badge" style={{ background: '#8b6f5c' }}>{artifact.period}</span>
                          <span className="era-badge">{artifact.era}</span>
                        </div>
                        <Card.Title className="artifact-title">{artifact.title}</Card.Title>
                        <Card.Text className="artifact-description">{artifact.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="jade" title="玉器">
              <Row className="g-4 mt-3">
                {filteredArtifacts.map((artifact) => (
                  <Col lg={4} md={6} key={artifact.id}>
                    <Card className="artifact-card h-100" onClick={() => setSelectedArtifact(artifact)}>
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={artifact.imgSrc}
                          alt={artifact.title}
                          style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <div className="category-badge" style={{ background: '#6b8e7f', top: '15px', right: '15px' }}>玉器</div>
                      </div>
                      <Card.Body>
                        <div className="artifact-meta">
                          <span className="period-badge" style={{ background: '#6b8e7f' }}>{artifact.period}</span>
                          <span className="era-badge">{artifact.era}</span>
                        </div>
                        <Card.Title className="artifact-title">{artifact.title}</Card.Title>
                        <Card.Text className="artifact-description">{artifact.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </section>

      <section id="timeline" className="timeline-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="section-badge">历史脉络</span>
            <h2 className="section-title">时光回溯</h2>
            <p className="section-subtitle">Historical Timeline</p>
          </div>
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-event">{item.event}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit-info" className="visit-section py-5">
        <Container>
          <div className="text-center mb-5">
            <span className="section-badge">参观指南</span>
            <h2 className="section-title">参观信息</h2>
            <p className="section-subtitle">Visit Information</p>
          </div>
          <Row className="g-4">
            <Col lg={6}>
              <div className="visit-card">
                <div className="visit-icon">📅</div>
                <h3>展览详情</h3>
                <div className="visit-details">
                  <div className="visit-item">
                    <strong>展览名称:</strong>
                    <span>千年汉韵——海昏侯刘贺墓出土文物特展</span>
                  </div>
                  <div className="visit-item">
                    <strong>展览日期:</strong>
                    <span>2025年7月3日 至 2025年11月2日</span>
                  </div>
                  <div className="visit-item">
                    <strong>开放时间:</strong>
                    <span>每日 9:00 - 17:00 (16:30后停止入场，周一闭馆)</span>
                  </div>
                  <div className="visit-item">
                    <strong>展览地点:</strong>
                    <span>珠海博物馆二楼第四、第五展厅</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="visit-card">
                <div className="visit-icon">🚌</div>
                <h3>交通指南</h3>
                <div className="visit-details">
                  <div className="visit-item">
                    <strong>公交路线:</strong>
                    <span>乘坐 K3路 或 202路 公交车，在"海韵城(日月贝)"站下车，步行约5分钟即可到达。</span>
                  </div>
                  <div className="visit-item">
                    <strong>出租车/网约车:</strong>
                    <span>直接导航至"珠海博物馆"或"日月贝"。</span>
                  </div>
                  <div className="visit-item">
                    <strong>自驾停车:</strong>
                    <span>博物馆设有地下停车场，观众可免费停车。</span>
                  </div>
                  <div className="visit-item">
                    <strong>温馨提示:</strong>
                    <span>建议出发前通过官方渠道查询最新信息和预约方式。</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={selectedArtifact !== null} onHide={() => setSelectedArtifact(null)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedArtifact?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedArtifact && (
            <div className="artifact-modal">
              <div className="artifact-modal-icon" style={{ background: `linear-gradient(135deg, ${selectedArtifact.color}22 0%, ${selectedArtifact.color}44 100%)` }}>
                <img
                  src={selectedArtifact.imgSrc}
                  alt={selectedArtifact.title}
                  style={{ maxHeight: '300px', objectFit: 'contain', filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))' }}
                />
              </div>
              <div className="artifact-meta mb-3">
                <span className="period-badge modal-badge" style={{ background: selectedArtifact.color }}>{selectedArtifact.period}</span>
                <span className="era-badge modal-badge">{selectedArtifact.era}</span>
                <span className="category-badge modal-badge" style={{ background: selectedArtifact.color }}>
                  {selectedArtifact.category === 'gold' && '金器'}
                  {selectedArtifact.category === 'bronze' && '青铜器'}
                  {selectedArtifact.category === 'jade' && '玉器'}
                </span>
              </div>
              <h5 className="mb-2">文物简介</h5>
              <p className="text-muted mb-3">{selectedArtifact.description}</p>
              <h5 className="mb-2">详细介绍</h5>
              <p>{selectedArtifact.details}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedArtifact(null)}>
            关闭
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 返回顶部按钮 */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="返回顶部"
      >
        ↑
      </button>

      <footer className="footer">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <h5>珠海博物馆</h5>
              <p className="text-white-50">
                珠海博物馆是集收藏、研究、展示、教育于一体的综合性博物馆，致力于保护和传承珠海及周边地区的历史文化遗产。
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h5>快速链接</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="footer-link">首页</a></li>
                <li><a href="#introduction" className="footer-link">展览简介</a></li>
                <li><a href="#artifacts" className="footer-link">文物珍品</a></li>
                <li><a href="#visit-info" className="footer-link">参观指南</a></li>
              </ul>
            </Col>
            <Col md={4} className="mb-4">
              <h5>联系我们</h5>
              <ul className="list-unstyled text-white-50">
                <li>📍 地址: 珠海市香洲区九洲大道西</li>
                <li>📞 电话: 0756-8888888</li>
                <li>✉️ 邮箱: museum@zhuhai.gov.cn</li>
                <li>🌐 网站: www.zhuhai-museum.cn</li>
              </ul>
            </Col>
          </Row>
          <hr className="my-4" />
          <p className="text-center mb-0">
            &copy; {new Date().getFullYear()} 珠海博物馆特展在线导览. All Rights Reserved.
          </p>
        </Container>
      </footer>
    </>
  );
}
