(function () {
    const courses = [
        {
            id: 'paper-cutting',
            title: '剪纸艺术入门',
            category: '传统手工艺',
            level: '初级',
            rating: '4.9',
            learners: 1234,
            image: './assets/images/paper-cutting.png',
            imageSource: '原站课程素材（已本地化）',
            summary: '从民俗纹样到双喜剪纸，认识传统剪纸的构图、折叠与剪刻方法。',
            intro: [
                '剪纸是以纸为材料、以剪刀或刻刀为主要工具的传统民间艺术。课程从剪纸的民俗语境和吉祥纹样讲起，带领学习者理解图案背后的文化含义。',
                '前两节通过公开教学视频完成文化导入与“双喜”纹样实作，后续课程将逐步解锁折叠构图、阴阳刻、花鸟纹样、人物造型与蔚县点染技法。'
            ],
            master: {
                name: '周淑英',
                badge: '国家级代表性传承人',
                project: '剪纸（蔚县剪纸）',
                sourceLabel: '中国非物质文化遗产网',
                sourceUrl: 'https://www.ihchina.cn/ccr_detail/2757.html',
                intro: '周淑英，1964年生于河北蔚县，第四批国家级非物质文化遗产项目剪纸（蔚县剪纸）代表性传承人。她师从父亲周永明，掌握画、刻、染全套技艺，并在传统点染基础上探索铺盖法、雾染法、叠染法等新方法。'
            },
            lessons: [
                { title: '民俗与纹样：读懂剪纸语言', duration: '07:20', bvid: 'BV1Ae4y1e7Qc', page: 1, description: '从节令、婚俗与吉祥寓意出发，认识剪纸纹样为何而剪、为谁而剪。' },
                { title: '双喜剪纸：折叠与下剪', duration: '05:30', bvid: 'BV1U24y1k7hX', page: 1, description: '跟随示范完成双喜纹样，练习对折、定位、转折与连续线条控制。' },
                { title: '折叠与对称构图', duration: '09:00', locked: true },
                { title: '阴刻、阳刻与线面关系', duration: '10:00', locked: true },
                { title: '花鸟纹样的概括方法', duration: '11:00', locked: true },
                { title: '戏曲人物造型设计', duration: '10:00', locked: true },
                { title: '蔚县剪纸点染基础', duration: '12:00', locked: true },
                { title: '综合创作：我的吉祥窗花', duration: '12:00', locked: true }
            ],
            quiz: [
                { question: '蔚县剪纸常被概括为哪一种工艺特点？', options: ['三分刻、七分染', '只剪不刻、素色为主', '先织后染、双面成形', '以木版套印为主'], answer: 0, explanation: '蔚县剪纸以刻制和点染见长，常用“三分刻、七分染”概括其特色。' },
                { question: '制作对称剪纸时，最先需要确认的是？', options: ['纸张折叠后的对称轴', '颜料的品牌', '装裱框的尺寸', '作品售价'], answer: 0, explanation: '对称轴决定展开后的整体结构，折叠和定位是下剪前的关键。' },
                { question: '阴刻在剪纸中通常指什么？', options: ['保留主体轮廓，剪去背景', '剪去纹样线条或块面，让空白形成图案', '只使用黑色纸张', '在纸背涂墨'], answer: 1, explanation: '阴刻主要以剪去或刻去的空白部分表现纹样。' },
                { question: '剪刻细小转角时，更稳妥的做法是？', options: ['一次用力剪到底', '小幅转动纸张并分段下剪', '闭眼凭手感完成', '把多层纸张随意加厚'], answer: 1, explanation: '分段下剪并转动纸张更容易控制线条，也能降低撕裂风险。' },
                { question: '传统剪纸中的牡丹纹样常寄托什么寓意？', options: ['富贵吉祥', '远行顺风', '勤学苦读', '驱赶雨水'], answer: 0, explanation: '牡丹在传统民间美术中常象征富贵、繁荣和美好生活。' }
            ]
        },
        {
            id: 'opera-mask',
            title: '京剧脸谱绘制',
            category: '传统手工艺',
            level: '初级',
            rating: '4.8',
            learners: 986,
            image: './assets/images/opera-mask.png',
            imageSource: '原站课程素材（已本地化）',
            summary: '理解脸谱色彩和谱式，以蒋干、张飞为例练习勾线与设色。',
            intro: [
                '京剧脸谱通过颜色、线条和谱式塑造人物性格，是戏曲舞台视觉体系的重要组成部分。本课程不只教“画得像”，更强调先理解人物，再组织眉、眼、鼻窝和面部色块。',
                '前两节选取蒋干与张飞的公开勾脸示范，观察不同人物的结构和用色；后续章节将围绕色彩寓意、谱式构图、勾线顺序和完整作品展开。'
            ],
            master: {
                name: '杨玉栋',
                badge: '北京市非遗代表性传承人',
                project: '彩塑京剧脸谱',
                sourceLabel: '中国非物质文化遗产网',
                sourceUrl: 'https://www.ihchina.cn/niansu/html/biMoHuiChun_caiSuJingJuLianPu.html',
                intro: '杨玉栋，1943年生于北京，北京市非物质文化遗产项目代表性传承人。早年学习彩塑与盔头制作，长期钻研彩塑京剧脸谱，被誉为“脸谱杨”，代表作包括《关羽》《林冲》《孙尚香》等。'
            },
            lessons: [
                { title: '蒋干脸谱：结构定位与勾线', duration: '05:18', bvid: 'BV1Pw4m1Y7Un', page: 1, description: '观察面部中轴、眉眼和鼻窝的定位方式，建立完整勾线顺序。' },
                { title: '张飞脸谱：黑色块面与神态', duration: '11:57', bvid: 'BV1si421Y7ci', page: 1, description: '通过张飞谱式理解黑色块面、夸张眉眼和人物气质之间的关系。' },
                { title: '脸谱色彩的传统寓意', duration: '09:00', locked: true },
                { title: '眉、眼、鼻窝的谱式变化', duration: '10:00', locked: true },
                { title: '整脸、三块瓦脸与十字门脸', duration: '11:00', locked: true },
                { title: '关羽脸谱的勾画步骤', duration: '12:00', locked: true },
                { title: '纸面设色与边缘整理', duration: '10:00', locked: true },
                { title: '综合创作：设计人物脸谱', duration: '12:00', locked: true }
            ],
            quiz: [
                { question: '京剧脸谱中，红色通常表现哪类性格特征？', options: ['忠勇正直', '阴险多疑', '粗莽凶狠', '诙谐滑稽'], answer: 0, explanation: '传统脸谱色彩中，红色常用于表现忠勇、正直等人物特征。' },
                { question: '勾画脸谱时，建立左右关系最重要的参照是？', options: ['面部中轴线', '耳朵外缘', '服装颜色', '画纸价格'], answer: 0, explanation: '先确定面部中轴线，才能稳定安排眉眼、鼻窝和左右色块。' },
                { question: '传统脸谱中的白色常被用于表现？', options: ['刚直勇猛', '奸诈多疑', '温厚仁慈', '仙风道骨'], answer: 1, explanation: '白色脸谱常与奸诈、多疑等人物性格联系在一起。' },
                { question: '为什么不能脱离人物随意使用脸谱颜色？', options: ['颜色与人物身份、性格和谱式有关', '颜料价格不同', '舞台只能使用一种颜色', '观众不喜欢鲜艳色彩'], answer: 0, explanation: '脸谱颜色是一套约定俗成的舞台符号，应服务于人物塑造。' },
                { question: '较合理的绘制顺序是？', options: ['定位起稿—勾线—分区设色—细节整理', '先涂满黑色—随意擦除', '先画服装—再决定人物', '直接从最小花纹开始'], answer: 0, explanation: '从整体定位到局部细化，可以减少比例和色块关系上的错误。' }
            ]
        },
        {
            id: 'chinese-knot',
            title: '中国结编织技艺',
            category: '传统手工艺',
            level: '初级',
            rating: '4.8',
            learners: 1086,
            image: './assets/images/chinese-knot.png',
            imageSource: '原站课程素材（已本地化）',
            summary: '认识中国结的结构和寓意，从徒手起结到盘长蝴蝶完成入门练习。',
            intro: [
                '中国结以一根或多根绳线通过穿、绕、挑、压等动作形成对称而连贯的结构，兼具实用、装饰与祝福寓意。课程重点训练线序判断、松紧控制和结体整理。',
                '前两节从徒手编结和盘长蝴蝶入手，帮助学习者建立“看走线、守中心、匀松紧”的基本习惯；后续课程将依次解锁平结、双联结、吉祥结和组合挂饰。'
            ],
            master: {
                name: '孙明辉',
                badge: '伊春市市级非遗代表性传承人',
                project: '明辉中国结编织技艺',
                sourceLabel: '伊美区人民政府',
                sourceUrl: 'https://www.ycym.gov.cn/ymqrmzf/c101959/202308/323259.shtml',
                intro: '孙明辉是伊春市市级非物质文化遗产项目“明辉中国结编织技艺”代表性传承人。她继承母亲的编织手艺并持续创新，参与建设中国结编织非遗传承基地，开展长期免费培训，还通过项目带动周边群众灵活就业。'
            },
            lessons: [
                { title: '徒手起结：看懂穿、绕与压', duration: '05:17', bvid: 'BV1QL411b7gA', page: 1, description: '不用复杂工具完成基础中国结，重点观察线头方向与上下穿压关系。' },
                { title: '盘长蝴蝶：组合与调线', duration: '06:57', bvid: 'BV1RuiZYUEr1', page: 1, description: '用盘长结和双钱结组合蝴蝶造型，练习收结与均匀调线。' },
                { title: '线材、工具与长度估算', duration: '08:00', locked: true },
                { title: '平结与双联结', duration: '10:00', locked: true },
                { title: '吉祥结的线序规律', duration: '11:00', locked: true },
                { title: '盘长结的回路结构', duration: '12:00', locked: true },
                { title: '流苏、珠饰与收尾', duration: '09:00', locked: true },
                { title: '综合创作：吉祥挂饰', duration: '12:00', locked: true }
            ],
            quiz: [
                { question: '编结时“压”通常表示什么？', options: ['线从另一根线的上方经过', '把绳子剪断', '在线上涂胶', '把作品压进书里'], answer: 0, explanation: '在读线序时，“压”表示当前线段从另一线段上方经过。' },
                { question: '调线时最重要的原则是？', options: ['只拉最外侧线头', '逐段调整并保持左右松紧均匀', '越紧越好', '完成后再找中心'], answer: 1, explanation: '结体需要逐段、对称地调线，才能保持结构平整和大小一致。' },
                { question: '盘长结的视觉特点是？', options: ['线条回环连贯', '必须剪断多次', '只能使用黑线', '没有对称关系'], answer: 0, explanation: '盘长结以回环连续、结构对称为典型视觉特征。' },
                { question: '开始编织前为什么要预估线长？', options: ['避免中途线材不足并减少浪费', '让绳子颜色变深', '为了增加结的重量', '让工具更锋利'], answer: 0, explanation: '根据结型、尺寸和收尾方式预估线长，可避免做到一半无法继续。' },
                { question: '中国结常见的文化寓意是？', options: ['吉祥团圆、连绵相续', '拒绝交流', '季节降温', '测量距离'], answer: 0, explanation: '中国结常借连贯、对称的结构表达吉祥、团圆和美好祝愿。' }
            ]
        },
        {
            id: 'haiyang-yangge',
            title: '海阳大秧歌入门',
            category: '传统舞蹈',
            level: '初级',
            rating: '4.9',
            learners: 832,
            image: './assets/images/haiyang-yangge.svg',
            imageSource: '站内原创课程插画',
            summary: '从基本步伐和风格组合入门，体会海阳秧歌“跑扭结合”的动律。',
            intro: [
                '海阳大秧歌流行于山东海阳，是集歌、舞、戏于一体的传统民间艺术。它的动作强调跑扭结合，男性动作爽朗稳健，女性动作活泼舒展，表演中常见花鼓、彩扇、手绢等道具。',
                '前两节安排基本步伐与代表性组合赏析，先建立节奏、重心和风格感；后续章节将解锁提沉、拧转、花鼓、道具与队形训练。练习前请充分热身，并在安全空间内完成动作。'
            ],
            master: {
                name: '于信',
                badge: '国家级代表性传承人',
                project: '秧歌（海阳大秧歌）',
                sourceLabel: '中国非物质文化遗产网',
                sourceUrl: 'https://www.ihchina.cn/ccr_detail/1398.html',
                intro: '于信，1952年生于山东海阳，第五批国家级非物质文化遗产项目秧歌（海阳大秧歌）代表性传承人。18岁起跟随祖父于学礼学习花鼓表演，在传承基础上形成刚柔并济、潇洒稳健的表演风格，并长期通过示范和口述传授技艺。'
            },
            lessons: [
                { title: '基本步伐：重心与行进路线', duration: '07:07', bvid: 'BV1aBCBYCEc6', page: 1, description: '从基础步伐观察脚下节奏、重心交换和上身配合，为组合训练打底。' },
                { title: '风格组合：海阳秧歌的动律', duration: '05:43', bvid: 'BV1vK4y1V7dV', page: 1, description: '通过舞台组合体会海阳秧歌的力量、节奏与“跑扭结合”的风格。' },
                { title: '提沉与呼吸配合', duration: '08:00', locked: true },
                { title: '拧、抻、磨的动律训练', duration: '10:00', locked: true },
                { title: '花鼓角色与基本动作', duration: '11:00', locked: true },
                { title: '彩扇、手绢的使用', duration: '10:00', locked: true },
                { title: '队形与常见阵式', duration: '12:00', locked: true },
                { title: '综合表演组合', duration: '12:00', locked: true }
            ],
            quiz: [
                { question: '海阳大秧歌最突出的动作特点之一是？', options: ['跑扭结合', '全程静止', '只使用手部动作', '完全没有节奏'], answer: 0, explanation: '海阳大秧歌强调在行进、奔跑中完成扭动，形成鲜明的动律。' },
                { question: '海阳大秧歌的表演队伍通常包括？', options: ['执事、乐队和舞队', '只有独舞演员', '合唱队和管弦乐队', '木偶与皮影'], answer: 0, explanation: '传统队伍结构严谨，通常由执事、乐队和舞队组成。' },
                { question: '于信主要传承和发展的是哪一类角色技艺？', options: ['花鼓表演', '古琴演奏', '昆曲小生', '剪纸点染'], answer: 0, explanation: '于信长期钻研海阳大秧歌中的花鼓表演。' },
                { question: '练习秧歌转体和拧转前，首先应该？', options: ['充分热身并确认场地安全', '立刻追求最大幅度', '穿容易打滑的鞋', '关闭所有照明'], answer: 0, explanation: '充分热身和安全场地是舞蹈练习的基本前提。' },
                { question: '下列哪一种可能成为秧歌表演道具？', options: ['彩扇', '古琴', '刻刀', '陶轮'], answer: 0, explanation: '彩扇、手绢、花鼓等都是秧歌表演中常见的道具。' }
            ]
        },
        {
            id: 'guqin',
            title: '古琴艺术入门',
            category: '传统音乐',
            level: '初级',
            rating: '4.9',
            learners: 1456,
            image: './assets/images/guqin.svg',
            imageSource: '站内原创课程插画',
            summary: '认识古琴音色、坐姿和基础指法，在聆听与练习中进入琴乐世界。',
            intro: [
                '古琴是中国传统七弦弹拨乐器，音色体系包括散音、泛音和按音。学习古琴既需要稳定的坐姿与手型，也需要在吟猱绰注等细微变化中体会含蓄、深远的审美。',
                '前两节选用龚一先生早期《古琴入门》修复版片段，建立对琴器、音色和基本演奏状态的认识；后续课程将逐步解锁减字谱、右手八法、左手走手音与入门琴曲。'
            ],
            master: {
                name: '龚一',
                badge: '国家级代表性传承人',
                project: '古琴艺术',
                sourceLabel: '中国非物质文化遗产网',
                sourceUrl: 'https://www.ihchina.cn/ccr_detail/884.html',
                intro: '龚一，1941年生于江苏启东，第二批国家级非物质文化遗产项目古琴艺术代表性传承人。其学习经历融汇多家琴派，长期从事演奏、打谱、教学与研究，著有《古琴演奏法》《古琴新谱》等。'
            },
            lessons: [
                { title: '龚一《古琴入门》第二讲', duration: '05:10', bvid: 'BV16Y411M7Mi', page: 2, description: '跟随修复版教学片段，建立对古琴演奏状态和基础知识的直观认识。' },
                { title: '龚一《古琴入门》第三讲', duration: '07:41', bvid: 'BV16Y411M7Mi', page: 3, description: '继续学习古琴音色与基础演奏要领，观察手型和发音之间的关系。' },
                { title: '古琴构造、琴位与定弦', duration: '09:00', locked: true },
                { title: '减字谱的识读方法', duration: '11:00', locked: true },
                { title: '右手基础：抹、挑、勾、剔', duration: '12:00', locked: true },
                { title: '泛音与徽位练习', duration: '10:00', locked: true },
                { title: '左手按音与吟猱', duration: '12:00', locked: true },
                { title: '入门琴曲与意境表达', duration: '12:00', locked: true }
            ],
            quiz: [
                { question: '古琴通常有多少根弦？', options: ['五根', '七根', '九根', '十三根'], answer: 1, explanation: '今天常见的古琴为七弦琴。' },
                { question: '古琴的三类基本音色是？', options: ['散音、泛音、按音', '高音、中音、低音', '宫、商、角', '吹、拉、弹'], answer: 0, explanation: '散音、泛音与按音共同构成古琴丰富的音色体系。' },
                { question: '古琴传统记谱主要使用？', options: ['减字谱', '五线谱', '鼓谱', '舞谱'], answer: 0, explanation: '减字谱通过组合汉字偏旁记录弦位、徽位和指法。' },
                { question: '古琴演奏中，左手常承担什么作用？', options: ['按弦取音并完成吟猱绰注', '只负责翻谱', '敲击琴桌', '固定琴弦不动'], answer: 0, explanation: '左手通过按弦和走手变化塑造音高、余韵与气息。' },
                { question: '初学坐姿更应注意？', options: ['身体自然稳定、肩臂放松', '尽量耸肩用力', '离琴越远越好', '手腕始终僵直'], answer: 0, explanation: '自然稳定、肩臂放松有助于控制触弦并避免紧张。' }
            ]
        },
        {
            id: 'kunqu',
            title: '昆曲艺术入门',
            category: '传统戏剧',
            level: '初级',
            rating: '4.9',
            learners: 1178,
            image: './assets/images/kunqu.svg',
            imageSource: '站内原创课程插画',
            summary: '从昆曲审美和音乐入门，认识水磨腔、行当与程式化表演。',
            intro: [
                '昆曲以典雅细腻的唱腔、文学性强的曲词和高度程式化的表演著称，唱、念、做、打与手、眼、身、法、步共同构成舞台表达。',
                '前两节通过公开课程认识昆曲之美与音乐特征；后续章节将解锁水磨腔、工尺谱、行当身段、经典折子戏和舞台审美。课程适合希望从“看懂、听懂”开始接近昆曲的学习者。'
            ],
            master: {
                name: '蔡正仁',
                badge: '国家级代表性传承人',
                project: '昆曲',
                sourceLabel: '中国非物质文化遗产网',
                sourceUrl: 'https://www.ihchina.cn/ccr_detail/1522.html',
                intro: '蔡正仁，1941年生于江苏苏州，第二批国家级非物质文化遗产项目昆曲代表性传承人、一级演员。他得到昆曲“传”字辈老艺人及俞振飞亲授，专工小生，擅长官生、巾生、穷生等行当。'
            },
            lessons: [
                { title: '昆曲之美：审美导论', duration: '06:50', bvid: 'BV1qK411X7gy', page: 3, description: '从公开课程进入昆曲的历史、文学与舞台审美，建立整体观看框架。' },
                { title: '昆曲音乐之美：曲牌与声腔', duration: '05:32', bvid: 'BV1qK411X7gy', page: 6, description: '聆听昆曲音乐的基本组织方式，认识曲牌、节奏和演唱之间的关系。' },
                { title: '水磨腔与咬字行腔', duration: '10:00', locked: true },
                { title: '工尺谱与板眼', duration: '11:00', locked: true },
                { title: '生、旦、净、末、丑行当', duration: '10:00', locked: true },
                { title: '手眼身法步基础', duration: '12:00', locked: true },
                { title: '《牡丹亭》折子戏赏析', duration: '12:00', locked: true },
                { title: '舞台综合：唱念做表', duration: '12:00', locked: true }
            ],
            quiz: [
                { question: '昆曲常被称为？', options: ['百戏之祖', '木偶之乡', '弦乐之王', '纸上舞蹈'], answer: 0, explanation: '昆曲对许多后来的戏曲声腔和剧种产生了深远影响，常被誉为“百戏之祖”。' },
                { question: '戏曲表演“四功”通常指？', options: ['唱、念、做、打', '琴、棋、书、画', '生、旦、净、丑', '酸、甜、苦、辣'], answer: 0, explanation: '唱、念、做、打是戏曲演员的四项基本表演功夫。' },
                { question: '昆曲唱腔常用哪一名称概括其细腻婉转的风格？', options: ['水磨腔', '信天游', '梆子腔', '花儿'], answer: 0, explanation: '“水磨腔”常用于概括昆曲细腻、婉转、讲究字声关系的唱腔。' },
                { question: '《牡丹亭》的作者是？', options: ['汤显祖', '关汉卿', '孔尚任', '曹雪芹'], answer: 0, explanation: '《牡丹亭》是明代戏剧家汤显祖的代表作。' },
                { question: '昆曲表演“五法”通常包括手、眼、身、法和？', options: ['步', '笔', '纸', '鼓'], answer: 0, explanation: '“手、眼、身、法、步”共同构成戏曲形体表演的重要训练体系。' }
            ]
        }
    ];

    window.COURSES = courses;
    window.COURSE_CATEGORIES = ['传统手工艺', '传统舞蹈', '传统音乐', '传统戏剧'];

    window.getCourseById = function (id) {
        return courses.find(function (course) { return course.id === id; }) || courses[0];
    };

    window.getSelectedCourse = function () {
        return window.getCourseById(localStorage.getItem('feiyiCourseId') || courses[0].id);
    };

    window.selectCourse = function (id) {
        localStorage.setItem('feiyiCourseId', id);
        localStorage.setItem('feiyiLessonIndex', '0');
        return window.getCourseById(id);
    };

    window.selectLesson = function (courseId, lessonIndex) {
        window.selectCourse(courseId);
        localStorage.setItem('feiyiLessonIndex', String(lessonIndex));
    };
})();
