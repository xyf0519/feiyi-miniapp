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

    const supplementalCourses = [
        {
            id: 'cloisonne', title: '景泰蓝制作技艺', category: '传统手工艺', project: '景泰蓝制作技艺', masterName: '钟连盛', region: '北京市',
            summary: '从铜胎、掐丝到点蓝与磨光，认识景泰蓝多工序协作的工艺体系。',
            bio: '钟连盛是国家级非物质文化遗产项目景泰蓝制作技艺代表性传承人、中国工艺美术大师，长期从事景泰蓝设计、制作与传承。他重视造型、纹样与工艺的整体关系，并推动传统景泰蓝在当代公共文化和艺术设计中的应用。',
            sourceUrl: 'https://www.ihchina.cn/project_details/18262.html', sourceLabel: '中国非物质文化遗产网',
            topics: ['铜胎与制胎', '掐丝与粘丝', '点蓝与烧蓝'], outline: ['材料、工具与安全规范', '铜丝纹样的弯折方法', '釉料色彩与点蓝次序', '烧蓝、磨光与镀金', '传统纹样的当代转化', '综合作品赏析']
        },
        {
            id: 'su-embroidery', title: '苏绣针法入门', category: '传统手工艺', project: '苏绣', masterName: '姚建萍', region: '江苏省苏州市',
            summary: '认识苏绣劈丝、配色与基础针法，观察丝线如何塑造细腻层次。',
            bio: '姚建萍是国家级非物质文化遗产项目苏绣代表性传承人、中国工艺美术大师，成长于苏州镇湖刺绣世家。她在扎实传统针法基础上探索现实题材和当代表达，并持续通过工作室、展览与公共教育培养刺绣人才。',
            sourceUrl: 'https://www.ihchina.cn/project_details/27793', sourceLabel: '中国非物质文化遗产网',
            topics: ['劈丝与理线', '齐针与套针', '丝理和色阶'], outline: ['绷架、绣布与工具', '起针收针和线迹控制', '齐针、抢针与套针', '配色与渐变层次', '花鸟局部的丝理', '小幅绣片综合练习']
        },
        {
            id: 'longquan-celadon', title: '龙泉青瓷烧制', category: '传统手工艺', project: '龙泉青瓷烧制技艺', masterName: '徐朝兴', region: '浙江省龙泉市',
            summary: '从瓷土、拉坯到施釉与烧成，理解龙泉青瓷温润釉色的形成。',
            bio: '徐朝兴是国家级非物质文化遗产项目龙泉青瓷烧制技艺代表性传承人、中国工艺美术大师。他长期研究传统龙泉窑配釉、造型与烧成工艺，在恢复经典釉色和培养后继人才方面具有重要影响。',
            sourceUrl: 'https://www.ihchina.cn/ccr_detail/2981/', sourceLabel: '中国非物质文化遗产网',
            topics: ['瓷土与练泥', '拉坯和修坯', '施釉与烧成'], outline: ['龙泉窑历史与审美', '练泥、揉泥与工具', '拉坯成形的重心控制', '修坯与足部处理', '釉层厚薄和窑温', '青瓷作品观察记录']
        },
        {
            id: 'yixing-zisha', title: '宜兴紫砂陶制作', category: '传统手工艺', project: '宜兴紫砂陶制作技艺', masterName: '吕尧臣', region: '江苏省宜兴市',
            summary: '认识紫砂泥料与拍身筒成形，理解壶体比例、功能和气韵。',
            bio: '吕尧臣是第四批国家级非物质文化遗产项目宜兴紫砂陶制作技艺代表性传承人、中国工艺美术大师。1958年进入宜兴紫砂工艺厂后师从吴云根，长期探索造型与泥料语言，并开创具有鲜明个人风格的绞泥技艺。',
            sourceUrl: 'https://www.ihchina.cn/ccr_detail/3189', sourceLabel: '中国非物质文化遗产网',
            topics: ['紫砂泥料', '拍身筒成形', '壶嘴把的衔接'], outline: ['紫砂矿料与工具', '泥片和泥条准备', '拍身筒与镶身筒', '壶盖、壶嘴和壶把', '明针修整和刻款', '壶艺造型赏析']
        },
        {
            id: 'yangliuqing-new-year-picture', title: '杨柳青木版年画', category: '传统手工艺', project: '木版年画（杨柳青木版年画）', masterName: '霍庆有', region: '天津市',
            summary: '理解勾、刻、印、绘的工序配合，完成一幅年画纹样体验。',
            bio: '霍庆有是国家级非物质文化遗产项目木版年画（杨柳青木版年画）代表性传承人，出身年画世家。他系统掌握勾描、刻版、套印和彩绘等工序，长期从事古版保护、传统题材整理和传习工作。',
            sourceUrl: 'https://www.ihchina.cn/ccr_detail/2597.html', sourceLabel: '中国非物质文化遗产网',
            topics: ['勾稿与分版', '木版套印', '手工彩绘'], outline: ['年画题材与节俗', '画稿线条和分色', '刻版刀法与安全', '水印套色与对版', '开脸和彩绘技法', '门神或娃娃年画练习']
        },
        {
            id: 'hengshui-inside-painting', title: '衡水内画技法', category: '传统手工艺', project: '衡水内画', masterName: '王习三', region: '河北省衡水市',
            summary: '从反向观察和勾笔控制入门，认识鼻烟壶内壁作画的独特方法。',
            bio: '王习三是国家级非物质文化遗产代表性项目衡水内画代表性传承人。他师从京派内画名家，吸收国画勾、皴、擦、染等方法，改进金属杆勾笔并探索油彩内画，对衡水内画技艺体系的形成和人才培养贡献突出。',
            sourceUrl: 'https://ich.nlc.cn/detail/1939', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/FxcC-crTGB.jpg',
            topics: ['勾笔结构', '内壁反画', '设色与细节'], outline: ['鼻烟壶与内画历史', '握壶和运笔视角', '线描与反向构图', '工笔设色和层次', '人物与动物细节', '小壶片模拟练习']
        },
        {
            id: 'dongyang-bamboo-weaving', title: '东阳竹编入门', category: '传统手工艺', project: '竹编（东阳竹编）', masterName: '何福礼', region: '浙江省东阳市',
            summary: '认识选竹、劈篾与经纬编织，在秩序变化中完成基础竹编纹样。',
            bio: '何福礼是国家级非物质文化遗产代表性项目竹编（东阳竹编）代表性传承人，14岁进入东阳木雕竹编厂学艺。他攻克竹丝镶嵌和反簧等技术难题，创作多件大型竹编作品，并参与故宫倦勤斋竹编部分修缮。',
            sourceUrl: 'https://ich.nlc.cn/detail/416', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/project/dd181653727424627.compress.jpg', cover: 'https://ich.nlc.cn/resource/project/dd181653727424627.compress.jpg',
            topics: ['选竹与劈篾', '经纬编织', '收边与定型'], outline: ['竹材特性与工具安全', '刮青、破竹和匀篾', '挑一压一基础编法', '六角眼与斜纹变化', '立体起底和收口', '小篮或杯垫练习']
        },
        {
            id: 'morin-khuur', title: '马头琴音乐入门', category: '传统音乐', project: '蒙古族马头琴音乐', masterName: '齐·宝力高', region: '内蒙古自治区',
            summary: '认识马头琴构造、持琴与弓法，在长音中感受草原音乐的气息。',
            bio: '齐·宝力高是国家级非物质文化遗产项目蒙古族马头琴音乐代表性传承人，长期从事演奏、创作、教学和理论整理。他推动马头琴演奏规范化与舞台传播，并通过乐团和教育实践培养了大批演奏人才。',
            sourceUrl: 'https://www.ihchina.cn/ccr_detail/885/', sourceLabel: '中国非物质文化遗产网',
            topics: ['琴体和定弦', '持弓与长弓', '草原长调气息'], outline: ['马头琴历史与构造', '坐姿、持琴和定弦', '空弦与慢长弓', '左手按弦位置', '装饰音和模仿性音色', '入门旋律练习']
        },
        {
            id: 'xian-drum-music', title: '西安鼓乐赏析', category: '传统音乐', project: '西安鼓乐', masterName: '赵庚辰', region: '陕西省西安市',
            summary: '从乐社、乐器和谱字进入西安鼓乐，辨听坐乐与行乐的组织方式。',
            bio: '赵庚辰是国家级非物质文化遗产项目西安鼓乐代表性传承人，长期参与鼓乐社活动和传统乐谱整理。他熟悉乐器配置、传统曲目与演奏规制，并持续通过传习和展演推动西安鼓乐的活态传承。',
            sourceUrl: 'https://www.ihchina.cn/ccr_detail/920.html', sourceLabel: '中国非物质文化遗产网',
            topics: ['鼓乐社与乐器', '坐乐和行乐', '工尺谱字'], outline: ['历史脉络与乐社制度', '吹管、打击乐器辨识', '坐乐和行乐场景', '节拍与锣鼓组织', '传统谱字的识读', '经典曲目分段聆听']
        },
        {
            id: 'dong-grand-song', title: '侗族大歌入门', category: '传统音乐', project: '侗族大歌', masterName: '胡官美', region: '贵州省榕江县',
            summary: '听辨多声部合唱与自然模拟，认识鼓楼歌队和以歌传情的传统。',
            bio: '胡官美又名乃珍珠，是国家级非物质文化遗产项目侗族大歌代表性传承人。她自幼随父母学习侗歌，熟悉不同声部的组织和演唱方法，成年后长期带领歌队并培养青少年歌手。',
            sourceUrl: 'https://ich.nlc.cn/detail/1777', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/0zn3Uc8WTH.jpg',
            topics: ['多声部合唱', '鼓楼歌队', '自然声音模仿'], outline: ['侗寨、鼓楼与歌俗', '低声部和高声部关系', '呼吸、共鸣与咬字', '蝉鸣流水的声音模仿', '歌队配合与领唱', '短句分声部练习']
        },
        {
            id: 'mongolian-long-song', title: '蒙古族长调民歌', category: '传统音乐', project: '蒙古族长调民歌', masterName: '巴德玛', region: '内蒙古自治区',
            summary: '在舒展旋律中练习气息、颤音和拖腔，理解长调与游牧生活的联系。',
            bio: '巴德玛是国家级非物质文化遗产代表性项目蒙古族长调民歌代表性传承人，自幼随家人学习长调和马头琴。她掌握阿拉善地区多种流派风格，以明亮高亢、质朴舒展的演唱见长，并长期参与民歌传习。',
            sourceUrl: 'https://ich.nlc.cn/detail/1780', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/5w4G3pDclf.jpg',
            topics: ['长气息', '诺古拉装饰音', '自由节奏'], outline: ['长调的地域与生活背景', '呼吸支点和长句', '母音延展与咬字', '诺古拉装饰技法', '自由节奏和情感', '短旋律模唱']
        },
        {
            id: 'dong-pipa-song', title: '侗族琵琶歌', category: '传统音乐', project: '侗族琵琶歌', masterName: '吴家兴', region: '贵州省榕江县',
            summary: '认识侗族琵琶的定弦与弹唱配合，感受叙事歌和抒情歌的语言。',
            bio: '吴家兴是国家级非物质文化遗产代表性项目侗族琵琶歌代表性传承人，少年时期开始随父母和歌师学习弹唱。他掌握完整的传统曲目与弹唱技艺，长期在村寨传歌并参与民族音乐进课堂工作。',
            sourceUrl: 'https://ich.nlc.cn/detail/1779', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/H8ubyt9-QL.jpg',
            topics: ['琵琶定弦', '弹唱配合', '叙事与抒情'], outline: ['侗族琵琶形制', '右手节奏型', '旋律与语言声调', '叙事歌结构', '抒情歌的情感表达', '短段弹唱练习']
        },
        {
            id: 'haicai-tune', title: '彝族海菜腔', category: '传统音乐', project: '彝族海菜腔', masterName: '阿家文', region: '云南省红河州',
            summary: '从滇南四大腔和四弦伴奏入门，听辨高腔、平腔与叙事段落。',
            bio: '阿家文是国家级非物质文化遗产代表性项目彝族海菜腔代表性传承人，自幼学习彝族四弦演奏并系统掌握滇南四大腔。他曾参与民族文化传习教学，自筹开办传承班，培养了众多四弦演奏者。',
            sourceUrl: 'https://ich.nlc.cn/detail/1783', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/2Nqyqqxno9.jpg',
            topics: ['滇南四大腔', '四弦伴奏', '真假声转换'], outline: ['海菜腔的流布区域', '四弦定弦与节奏', '高腔与平腔听辨', '呼吸和真假声', '对唱结构与即兴', '代表曲调模唱']
        },
        {
            id: 'cantonese-music', title: '广东音乐入门', category: '传统音乐', project: '广东音乐', masterName: '何克宁', region: '广东省广州市',
            summary: '认识高胡、扬琴等乐器，在加花与配合中感受广东音乐的明快韵味。',
            bio: '何克宁是广东音乐国家级非物质文化遗产代表性传承人，少年时期进入专业团体学习弦乐与击乐，师承高胡名家刘天一。他长期担任演奏和音乐设计工作，并参与传统曲目抢救整理与录制。',
            sourceUrl: 'https://ich.nlc.cn/detail/6042', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2026/3b9a7f87.jpg',
            topics: ['高胡音色', '小型合奏', '加花变奏'], outline: ['广府文化与乐种形成', '高胡、扬琴和秦琴', '骨干音与加花', '乐器间的衬托配合', '经典曲目结构', '主题旋律跟唱']
        },
        {
            id: 'jinbei-suonayue', title: '晋北鼓吹入门', category: '传统音乐', project: '唢呐艺术（晋北鼓吹）', masterName: '卢补良', region: '山西省忻州市',
            summary: '辨识唢呐主奏与锣鼓配合，理解八音会在民俗活动中的声音秩序。',
            bio: '卢补良是国家级非物质文化遗产代表性项目唢呐艺术（晋北鼓吹）代表性传承人，师从晋北鼓吹老艺人学习。他的演奏兼具粗犷气势与细腻表现，并在传统技巧基础上吸收现代唢呐演奏方法。',
            sourceUrl: 'https://ich.nlc.cn/detail/267', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/project/eb751611914554100.jpg', cover: 'https://ich.nlc.cn/resource/project/46f11611914674668.jpg',
            topics: ['八音会编制', '唢呐气息', '锣鼓配合'], outline: ['民俗场景与演奏规制', '乐器编制和音色', '口型、哨片与长音', '锣鼓节奏型', '主副唢呐的呼应', '传统曲牌聆听']
        },
        {
            id: 'nanyin', title: '南音唱奏入门', category: '传统音乐', project: '南音', masterName: '苏统谋', region: '福建省泉州市',
            summary: '从上四管、工乂谱和咬字行腔入门，感受南音古雅细腻的声韵。',
            bio: '苏统谋是南音国家级代表性传承人，长期从事南音演唱、演奏、曲目整理和教学。他熟悉传统谱式与唱腔规范，通过社团传习和学校教育推动泉州南音代际传承。',
            sourceUrl: 'https://www.ihchina.cn/project_details/12600/', sourceLabel: '中国非物质文化遗产网',
            topics: ['上四管', '工乂谱', '泉腔咬字'], outline: ['南音历史与馆阁文化', '洞箫、琵琶等上四管', '工乂谱基础符号', '泉腔咬字和行腔', '指、谱、曲的区别', '慢曲片段聆听']
        },
        {
            id: 'dai-peacock-dance', title: '傣族孔雀舞入门', category: '传统舞蹈', project: '傣族孔雀舞', masterName: '旺腊', region: '云南省瑞丽市',
            summary: '从手形、三道弯和抖肩进入孔雀舞，观察动作如何模拟孔雀神态。',
            bio: '旺腊是国家级非物质文化遗产代表性项目傣族孔雀舞代表性传承人，1957年起学习孔雀舞并广泛吸收多位民间艺人的经验。他的表演尤其重视抖肩、眼神和身体曲线，对孔雀形象的模拟细腻生动。',
            sourceUrl: 'https://ich.nlc.cn/detail/278', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/project/09ac1611915570958.jpg', cover: 'https://ich.nlc.cn/resource/project/3b571611915625547.jpg',
            topics: ['孔雀手形', '三道弯', '抖肩与眼神'], outline: ['舞蹈文化和自然观察', '基本手形与腕部路线', '三道弯体态', '抖肩和呼吸', '步伐与空间方向', '孔雀形象短组合']
        },
        {
            id: 'korean-farm-dance', title: '朝鲜族农乐舞', category: '传统舞蹈', project: '朝鲜族农乐舞（乞粒舞）', masterName: '金明焕', region: '辽宁省桓仁县',
            summary: '认识长鼓、圆鼓与象帽等表演要素，在节奏中体会农乐舞的即兴性。',
            bio: '金明焕是国家级非物质文化遗产代表性项目朝鲜族农乐舞（乞粒舞）代表性传承人，自幼随父亲学艺。他在保留传统程式基础上规范队伍动作、音乐与道具使用，长期组织群众排练和传承。',
            sourceUrl: 'https://ich.nlc.cn/detail/3344', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/a684490c.jpg',
            topics: ['长鼓节奏', '屈伸动律', '象帽与队形'], outline: ['农耕祈愿与表演场景', '基本屈伸和呼吸', '长鼓击法与步伐', '圆鼓和小鼓角色', '象帽动作与安全', '队形组合练习']
        },
        {
            id: 'fengtai-flower-drum-lantern', title: '凤台花鼓灯', category: '传统舞蹈', project: '花鼓灯（凤台花鼓灯）', masterName: '邓虹', region: '安徽省凤台县',
            summary: '从兰花与鼓架子的角色配合入门，认识花场动作和淮河节奏。',
            bio: '邓虹是国家级非物质文化遗产代表性项目花鼓灯（凤台花鼓灯）代表性传承人，师承花鼓灯老艺人陈敬芝。她以兰花角色表演见长，与鼓架子演员长期合作，在舞台实践和教学中保存了凤台花鼓灯的重要技艺。',
            sourceUrl: 'https://ich.nlc.cn/detail/3011', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/508d849d.jpg',
            topics: ['兰花步态', '鼓架子', '小花场配合'], outline: ['淮河花鼓灯文化', '兰花基本体态', '扇花和手巾花', '鼓架子步伐', '双人小花场交流', '角色配合组合']
        },
        {
            id: 'changli-ground-yangge', title: '昌黎地秧歌', category: '传统舞蹈', project: '秧歌（昌黎地秧歌）', masterName: '周贺华', region: '河北省昌黎县',
            summary: '练习扇花、亮相和丑角动律，体会昌黎地秧歌诙谐鲜活的风格。',
            bio: '周贺华是国家级非物质文化遗产项目秧歌（昌黎地秧歌）代表性传承人，少年时期师从多位当地艺人，尤其擅长周派丑角。他的表演刚柔并济，扇花变化丰富，并长期参与基层培训、培养艺术骨干。',
            sourceUrl: 'https://ich.nlc.cn/detail/3175', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/93a57010.jpg',
            topics: ['扇花', '软硬亮相', '丑角动律'], outline: ['地秧歌角色和场面', '基本步与重心', '扇花路线', '软亮相与硬亮相', '表情和诙谐节奏', '丑角短组合']
        },
        {
            id: 'high-platform-lion-dance', title: '高台狮舞基础', category: '传统舞蹈', project: '狮舞（高台狮舞）', masterName: '唐守益', region: '重庆市彭水县',
            summary: '认识狮头狮尾配合、鼓点口令和高台表演的安全规范。',
            bio: '唐守益是国家级非物质文化遗产代表性项目狮舞（高台狮舞）代表性传承人，长期在重庆彭水从事狮舞表演和传习。他熟悉高台搭设、狮体配合、鼓点与传统套路，尤其重视集体默契和安全规范。',
            sourceUrl: 'https://ich.nlc.cn/detail/3622', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/85da8e8e.jpeg',
            topics: ['狮头狮尾配合', '鼓点口令', '高台安全'], outline: ['狮舞礼俗与角色', '狮头握法和视线', '前后两人的重心', '鼓点和动作口令', '低台基础路线', '安全保护与赏析']
        },
        {
            id: 'mangkang-string-dance', title: '芒康弦子舞', category: '传统舞蹈', project: '弦子舞（芒康弦子舞）', masterName: '江措', region: '西藏自治区芒康县',
            summary: '在弦子伴奏和歌舞循环中练习甩袖、靠步与舒展的身体动律。',
            bio: '江措是国家级非物质文化遗产项目弦子舞（芒康弦子舞）代表性传承人，承袭父亲的弦子舞技艺。他的动作舒展自然，长期组织群众歌舞活动并向青年传授代表性曲目和舞步。',
            sourceUrl: 'https://ich.nlc.cn/detail/3526', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/ceb35673.jpg',
            topics: ['弦子伴奏', '甩袖与靠步', '圆圈歌舞'], outline: ['茶马古道与芒康弦子', '琴声、歌声和舞步', '靠步和颤膝', '甩袖路线与呼吸', '圆圈队形和领舞', '基础歌舞组合']
        },
        {
            id: 'tajik-eagle-dance', title: '塔吉克族鹰舞', category: '传统舞蹈', project: '塔吉克族鹰舞', masterName: '库尔班·托合塔什', region: '新疆塔什库尔干县',
            summary: '观察鹰的盘旋与俯冲意象，练习肩臂、步伐和鹰笛节奏的配合。',
            bio: '库尔班·托合塔什是国家级非物质文化遗产代表性项目塔吉克族鹰舞代表性传承人，继承了家传鹰舞和鹰笛技艺。他能独舞、对舞和边唱边舞，动作保留了塔吉克民间鹰舞古朴有力的风格。',
            sourceUrl: 'https://ich.nlc.cn/detail/3552', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/d781efc4.jpg',
            topics: ['鹰的动作意象', '肩臂盘旋', '鹰笛节奏'], outline: ['高原生活与鹰崇拜', '基本体态和膝部弹性', '展翅与盘旋手臂', '俯冲和转向步法', '鹰笛、手鼓与舞步', '双人交流组合']
        },
        {
            id: 'huangni-drum-dance', title: '黄泥鼓舞入门', category: '传统舞蹈', project: '瑶族长鼓舞（黄泥鼓舞）', masterName: '盘振松', region: '广西金秀县',
            summary: '认识黄泥调鼓、长鼓击法与祭祀歌舞，练习鼓、步、身的协调。',
            bio: '盘振松是国家级非物质文化遗产代表性项目瑶族长鼓舞（黄泥鼓舞）代表性传承人。他掌握黄泥鼓制作、黄泥调音、舞蹈动作和相关仪式流程，是当地鼓队组织与传习的重要带头人。',
            sourceUrl: 'https://ich.nlc.cn/detail/401', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/project/eac61653727419601.compress.jpg', cover: 'https://ich.nlc.cn/resource/project/eac61653727419601.compress.jpg',
            topics: ['黄泥调鼓', '长鼓击法', '祭祀歌舞'], outline: ['盘王祭与黄泥鼓', '鼓的结构和调音', '背鼓、持鼓和安全', '击鼓节奏与脚步', '队形和歌唱配合', '基础鼓舞组合']
        },
        {
            id: 'maogusi-dance', title: '毛古斯舞入门', category: '传统舞蹈', project: '湘西土家族毛古斯舞', masterName: '彭南京', region: '湖南省湘西州',
            summary: '从草衣、对白和生产动作认识毛古斯舞的原始戏剧性与群体表演。',
            bio: '彭南京是国家级非物质文化遗产代表性项目湘西土家族毛古斯舞代表性传承人，自幼随父亲学习相关舞蹈。退休后长期参与乡村艺术团建设，整理和传授角色、对白、动作及表演程式。',
            sourceUrl: 'https://ich.nlc.cn/detail/3262', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/052da6b4.jpg',
            topics: ['草衣角色', '生产动作模拟', '对白和群舞'], outline: ['土家族历史记忆', '草衣和表演空间', '屈膝颤动与步法', '农事动作的舞蹈化', '对白、呼号与节奏', '群体场面练习']
        },
        {
            id: 'peking-opera', title: '京剧荀派表演入门', category: '传统戏剧', project: '京剧', masterName: '宋长荣', region: '江苏省淮安市',
            summary: '从念白、眼神和身段认识荀派花旦艺术，赏析《红娘》等代表剧目。',
            bio: '宋长荣是国家级非物质文化遗产代表性项目京剧代表性传承人，1961年拜荀慧生为师。他长期钻研并发展荀派艺术，以《红娘》等剧目著称，在人物塑造、念白和身段方面形成鲜明特色。',
            sourceUrl: 'https://ich.nlc.cn/detail/1855', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/0IbO8X5Juq.jpg',
            topics: ['荀派花旦', '念白与眼神', '圆场和水袖'], outline: ['京剧行当与荀派', '湖广音和京白', '眼神、手势和台步', '唱腔节奏与气口', '《红娘》人物赏析', '短段念白身段练习']
        },
        {
            id: 'yu-opera', title: '豫剧唱腔入门', category: '传统戏剧', project: '豫剧', masterName: '贾廷聚', region: '河南省',
            summary: '从梆子声腔、真假嗓和老生身段入门，感受豫剧质朴明快的表达。',
            bio: '贾廷聚是国家级非物质文化遗产代表性项目豫剧代表性传承人、豫剧唐派传人，长期主攻须生和老生。他以高亢明亮的嗓音和真假嗓结合的行腔见长，代表剧目包括《三哭殿》《南阳关》等。',
            sourceUrl: 'https://ich.nlc.cn/detail/3199', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/489abb59.jpg',
            topics: ['梆子声腔', '真假嗓结合', '须生身段'], outline: ['豫剧流布与风格', '板式和锣鼓经', '呼吸与真假嗓', '老生念白和台步', '唐派唱腔赏析', '短句行腔练习']
        },
        {
            id: 'sichuan-opera', title: '川剧表演入门', category: '传统戏剧', project: '川剧', masterName: '高凤莲', region: '重庆市',
            summary: '认识昆、高、胡、弹、灯五种声腔，从闺门旦表演进入川剧舞台。',
            bio: '高凤莲是国家级非物质文化遗产代表性项目川剧代表性传承人，少年时期转学川剧并拜周慕莲等名家为师。她在唱腔和表演方面积累深厚，以闺门旦角色见长，并培养了众多周派艺术后继者。',
            sourceUrl: 'https://ich.nlc.cn/detail/1834', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/d_9JkhtqHP.jpg',
            topics: ['川剧五腔', '闺门旦', '帮腔与锣鼓'], outline: ['川剧声腔和地域', '高腔与帮腔', '闺门旦身段', '念白和四川方音', '经典剧目人物', '唱念做综合观察']
        },
        {
            id: 'haining-shadow-puppetry', title: '海宁皮影戏', category: '传统戏剧', project: '皮影戏（海宁皮影戏）', masterName: '张坤荣', region: '浙江省海宁市',
            summary: '从影偶结构、操纵杆和光幕关系入门，认识水乡皮影的唱做配合。',
            bio: '张坤荣是国家级非物质文化遗产代表性项目皮影戏（海宁皮影戏）代表性传承人，1958年进入专业木偶皮影团学习。他长期担任影偶操作与主演，恢复排演多部传统和新编剧目并承担传习工作。',
            sourceUrl: 'https://ich.nlc.cn/detail/1898', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/0dMno0pZFo.jpg',
            topics: ['影偶结构', '操纵杆控制', '光幕和唱腔'], outline: ['海宁皮影历史与蚕俗', '影偶关节和角色', '主杆与手杆操作', '灯光、幕布和走位', '唱腔与器乐配合', '简单动作小段']
        },
        {
            id: 'puzhou-bangzi', title: '蒲州梆子入门', category: '传统戏剧', project: '蒲州梆子', masterName: '王艺华', region: '山西省运城市',
            summary: '从梆子板式、小生唱腔与翎子功认识蒲剧高亢激越的舞台风格。',
            bio: '王艺华是国家级非物质文化遗产代表性项目蒲州梆子代表性传承人，出身梨园世家，少年时期进入蒲剧团主攻小生。他兼擅唱腔与做功，尤其以翎子功、梢子功和帽翅功等表演技巧受到关注。',
            sourceUrl: 'https://ich.nlc.cn/detail/1849', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/16n1qroieJ.jpg',
            topics: ['梆子板式', '小生唱腔', '翎子功'], outline: ['蒲剧历史和声腔', '板式、梆子与锣鼓', '小生念白和行腔', '台步与亮相', '翎子功观察与安全', '代表剧目片段赏析']
        },
        {
            id: 'maoqiang', title: '茂腔艺术入门', category: '传统戏剧', project: '茂腔', masterName: '曾金凤', region: '山东省胶州市',
            summary: '听辨正调与反调，在乡音、板式和人物表达中认识“胶东之花”。',
            bio: '曾金凤是国家级非物质文化遗产代表性项目茂腔代表性传承人，出身茂腔艺术世家，自幼随父亲和多位艺人学戏。她唱做功底扎实、嗓音高亢，曾参与改革男腔并创造新的唱腔板式。',
            sourceUrl: 'https://ich.nlc.cn/detail/1877', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/Pf-dh_Ont1.png',
            topics: ['正调与反调', '胶东方言', '板腔体'], outline: ['茂腔流布和乡土文化', '板腔体基本结构', '正反调听辨', '方言咬字和念白', '角色唱腔特点', '经典唱段跟唱']
        },
        {
            id: 'wu-opera', title: '婺剧表演入门', category: '传统戏剧', project: '婺剧', masterName: '葛素云', region: '浙江省金华市',
            summary: '认识六大声腔和文武兼备的舞台风格，从旦角身段进入婺剧。',
            bio: '葛素云是国家级非物质文化遗产代表性项目婺剧代表性传承人，幼年入班学艺，先学小生后改习旦角，并向京昆名家请益。她文武兼擅，在舞台实践和后续培训中培养了多位优秀婺剧演员。',
            sourceUrl: 'https://ich.nlc.cn/detail/1829', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/7j-wVAr5zi.jpg',
            topics: ['六大声腔', '旦角身段', '文武表演'], outline: ['婺剧声腔构成', '高腔、乱弹与徽戏', '旦角手眼身法', '小生和旦角对手戏', '武戏特技的观察', '代表片段赏析']
        },
        {
            id: 'jin-opera', title: '晋剧唱做入门', category: '传统戏剧', project: '晋剧', masterName: '冀萍', region: '山西省',
            summary: '从中路梆子、板式和小旦表演入门，体会晋剧清亮流畅的声腔。',
            bio: '冀萍是国家级非物质文化遗产代表性项目晋剧代表性传承人，师从冀美莲并得到多位晋剧名家指点。她兼演小旦、花旦和刀马旦，唱腔清亮、表演细腻，长期培养晋剧后继人才。',
            sourceUrl: 'https://ich.nlc.cn/detail/1848', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2015/TxMZnEqsR0.jpg',
            topics: ['中路梆子', '小旦表演', '板式变化'], outline: ['晋剧形成和传播', '梆子、胡胡与锣鼓', '板式和唱腔气口', '小旦眼神和台步', '刀马旦动作观察', '经典唱段跟读']
        },
        {
            id: 'nanle-mulian-opera', title: '南乐目连戏', category: '传统戏剧', project: '目连戏（南乐目连戏）', masterName: '贺书各', region: '河南省南乐县',
            summary: '认识目连戏的角色、唱腔与民俗场面，理解古老戏剧的社区传承。',
            bio: '贺书各是国家级非物质文化遗产代表性项目目连戏（南乐目连戏）代表性传承人，少年时期进入村中戏班学艺。他熟悉小鬼、土地、阎王、刘氏等角色的唱腔、台词和身段，保存了南乐目连戏粗犷质朴的表演风格。',
            sourceUrl: 'https://ich.nlc.cn/detail/3193', sourceLabel: '国家图书馆非遗记录成果服务', photo: 'https://ich.nlc.cn/resource/2016/0c8a3053.jpg',
            topics: ['目连故事', '角色与彩技', '村落仪式'], outline: ['目连戏历史和民俗', '主要人物与故事线', '大平调唱腔', '身段、道具和场面', '彩技的文化理解', '角色念白赏析']
        }
    ];

    const supplementalVideos = {
        'cloisonne': [
            { title: '景泰蓝：恒久之美', duration: '05:18', bvid: 'BV1Pw411i7Rx', page: 7 },
            { title: '景泰蓝非遗纪录：从制胎到点蓝', duration: '10:31', bvid: 'BV15e4y1e7fM', page: 1 }
        ],
        'su-embroidery': [
            { title: '苏绣针法示范：正抢针', duration: '05:01', bvid: 'BV134411h789', page: 5 },
            { title: '苏绣针法示范：单套针', duration: '05:02', bvid: 'BV134411h789', page: 8 }
        ],
        'longquan-celadon': [
            { title: '龙泉青瓷工艺介绍', duration: '08:32', bvid: 'BV1N8foYdEwG', page: 1 },
            { title: '从泥土到青瓷：制作全过程', duration: '08:12', bvid: 'BV1p34zzYErr', page: 1 }
        ],
        'yixing-zisha': [
            { title: '宜兴紫砂非遗纪录', duration: '05:26', bvid: 'BV1s94y1Q79n', page: 1 },
            { title: '紫砂壶制作与烧制全过程', duration: '07:56', bvid: 'BV1Khj2ziE1E', page: 1 }
        ],
        'yangliuqing-new-year-picture': [
            { title: '杨柳青年画工艺介绍', duration: '06:14', bvid: 'BV1G4411G7jG', page: 1 },
            { title: '天津杨柳青木版年画', duration: '08:40', bvid: 'BV1q1PHe4EAV', page: 1 }
        ],
        'hengshui-inside-painting': [
            { title: '衡水内画非遗纪录片《迹忆》', duration: '11:18', bvid: 'BV1of42127wW', page: 1 },
            { title: '看河北·品非遗：衡水内画', duration: '05:05', bvid: 'BV1RVR3YNE5o', page: 1 }
        ],
        'dongyang-bamboo-weaving': [
            { title: '竹编技法：三角眼编织', duration: '09:20', bvid: 'BV1U54y1C7Sn', page: 1 },
            { title: '竹编十字编相框实作', duration: '08:22', bvid: 'BV1ukz3YHEGQ', page: 1 }
        ],
        'morin-khuur': [
            { title: '第一课：认识马头琴', duration: '11:40', bvid: 'BV1J9XpBFEza', page: 1 },
            { title: '第二课：拉响马头琴的第一声', duration: '06:22', bvid: 'BV1J9XpBFEza', page: 2 }
        ],
        'xian-drum-music': [
            { title: '西安鼓乐：东仓鼓乐社现场', duration: '08:16', bvid: 'BV1SY411c75K', page: 1 },
            { title: '西安鼓乐《满园春》赏析', duration: '06:38', bvid: 'BV1CQ4y1Z7SJ', page: 1 }
        ],
        'dong-grand-song': [
            { title: '侗族大歌文化导论', duration: '09:16', bvid: 'BV1kS4y1q74t', page: 1 },
            { title: '侗族大歌《蝉之歌》现场', duration: '06:31', bvid: 'BV1Ns4y1A71a', page: 1 }
        ],
        'mongolian-long-song': [
            { title: '非遗之美：蒙古族长调', duration: '05:36', bvid: 'BV1eC4y1C7Ke', page: 1 },
            { title: '蒙古族长调演唱教学', duration: '07:33', bvid: 'BV19DsAzGEAX', page: 1 }
        ],
        'dong-pipa-song': [
            { title: '《守艺·三江》侗族琵琶歌篇', duration: '07:34', bvid: 'BV1aU4y1y7Ng', page: 1 },
            { title: '侗族琵琶歌：饭养人，歌养心', duration: '07:05', bvid: 'BV1qj411q7dr', page: 1 }
        ],
        'haicai-tune': [
            { title: '彝族海菜腔文化与现场', duration: '11:54', bvid: 'BV1zu4y1m7ua', page: 1 },
            { title: '国家级非遗海菜腔交流演出', duration: '09:51', bvid: 'BV13z4y1S7Fh', page: 1 }
        ],
        'cantonese-music': [
            { title: '中国传统音乐：广东音乐', duration: '07:13', bvid: 'BV1x3tDe2Erz', page: 1 },
            { title: '广东高胡演奏示范', duration: '06:27', bvid: 'BV11m4y1V7D4', page: 1 }
        ],
        'jinbei-suonayue': [
            { title: '晋北梆子唢呐与乐队配合', duration: '07:28', bvid: 'BV1Xh41167VF', page: 1 },
            { title: '晋北梆子、唢呐与山西小管', duration: '10:07', bvid: 'BV16g411M7hS', page: 1 }
        ],
        'nanyin': [
            { title: '南管谱式与撩拍介绍', duration: '09:29', bvid: 'BV1ns411H7qX', page: 2 },
            { title: '南管乐器奏法示范', duration: '11:21', bvid: 'BV1ns411H7qX', page: 4 }
        ],
        'dai-peacock-dance': [
            { title: '傣族孔雀舞零基础教学', duration: '06:57', bvid: 'BV1or4y1V7ZS', page: 1 },
            { title: '傣族舞动作分解教学', duration: '10:01', bvid: 'BV1C441157Z6', page: 1 }
        ],
        'korean-farm-dance': [
            { title: '朝鲜族农乐舞：千年节拍', duration: '07:40', bvid: 'BV1dwSjBfExA', page: 1 },
            { title: '国家级非遗朝鲜族农乐舞', duration: '05:55', bvid: 'BV1t83izZEyj', page: 1 }
        ],
        'fengtai-flower-drum-lantern': [
            { title: '国家级非遗凤台花鼓灯现场', duration: '06:56', bvid: 'BV1wm421L7Uk', page: 1 },
            { title: '安徽花鼓灯的前世今生', duration: '08:36', bvid: 'BV1zN411Q7dx', page: 1 }
        ],
        'changli-ground-yangge': [
            { title: '看河北·品非遗：昌黎地秧歌', duration: '05:05', bvid: 'BV1gtQ7YuEBJ', page: 1 },
            { title: '昌黎地秧歌经典角色《跑驴》', duration: '09:59', bvid: 'BV1wp4y1g7Fo', page: 1 }
        ],
        'high-platform-lion-dance': [
            { title: '非遗高台狮舞技艺介绍', duration: '05:57', bvid: 'BV1JUaWegECE', page: 1 },
            { title: '高台狮舞现场完整示范', duration: '11:26', bvid: 'BV1MWhsepEbY', page: 1 }
        ],
        'mangkang-string-dance': [
            { title: '藏族弦子舞：点地与拖步训练', duration: '06:10', bvid: 'BV1zf4y1L7Lc', page: 7 },
            { title: '藏族弦子舞：牧区组合训练', duration: '06:12', bvid: 'BV1zf4y1L7Lc', page: 17 }
        ],
        'tajik-eagle-dance': [
            { title: '塔吉克族鹰舞文化介绍', duration: '09:48', bvid: 'BV1yP4y117ha', page: 1 },
            { title: '鹰笛与鹰舞现场', duration: '05:56', bvid: 'BV1kb8C6TEvT', page: 1 }
        ],
        'huangni-drum-dance': [
            { title: '瑶族长鼓舞教学指导', duration: '06:06', bvid: 'BV1sL411676H', page: 1 },
            { title: '瑶族长鼓舞示范讲解', duration: '09:58', bvid: 'BV1T8411g7qM', page: 1 }
        ],
        'maogusi-dance': [
            { title: '湘西土家族毛古斯舞《打猎》', duration: '07:10', bvid: 'BV1os411T7cj', page: 1 },
            { title: '毛古斯舞：中国舞蹈活化石', duration: '05:15', bvid: 'BV1CK4y197nc', page: 1 }
        ],
        'peking-opera': [
            { title: '荀派唱腔：气息、装饰音与韵味', duration: '10:55', bvid: 'BV1cY4y1s7ib', page: 1 },
            { title: '荀派花旦《红娘》教学', duration: '06:37', bvid: 'BV155411T72d', page: 1 }
        ],
        'yu-opera': [
            { title: '豫剧经典唱段：唱腔与舞台示范', duration: '06:32', bvid: 'BV1164y1D7xC', page: 2 },
            { title: '豫剧传统唱腔学唱示范', duration: '08:13', bvid: 'BV1CB7N6YEHZ', page: 1 }
        ],
        'sichuan-opera': [
            { title: '川剧故事：川剧简史', duration: '05:46', bvid: 'BV1XFmdYTE6Y', page: 1 },
            { title: '川剧故事：弹戏声腔', duration: '05:02', bvid: 'BV1XFmdYTE6Y', page: 6 }
        ],
        'haining-shadow-puppetry': [
            { title: '海宁皮影戏《孙悟空借芭蕉扇》', duration: '10:05', bvid: 'BV1Am4y1b7Qq', page: 1 },
            { title: '皮影人物拼装与操纵准备', duration: '08:45', bvid: 'BV1wz4y1K7Nd', page: 1 }
        ],
        'puzhou-bangzi': [
            { title: '蒲州梆子唱段《法门寺·悔路》', duration: '11:24', bvid: 'BV1sribByEHy', page: 4 },
            { title: '蒲州梆子唱段《送女》', duration: '09:02', bvid: 'BV1sribByEHy', page: 5 }
        ],
        'maoqiang': [
            { title: '茂腔的方言与剧种特色', duration: '11:54', bvid: 'BV1rJ4m1x7wR', page: 1 },
            { title: '经典茂腔《罗衫记》选段', duration: '05:15', bvid: 'BV1UUghzjEfQ', page: 1 }
        ],
        'wu-opera': [
            { title: '五分钟认识婺剧', duration: '05:17', bvid: 'BV1uJnAzfEjd', page: 1 },
            { title: '婺剧《女儿国》序幕：摆渡子母河', duration: '07:49', bvid: 'BV1rVNG6SE8v', page: 1 }
        ],
        'jin-opera': [
            { title: '晋剧声腔：句式特点', duration: '11:54', bvid: 'BV1xh4y147Xa', page: 1 },
            { title: '晋剧声腔：声韵基础', duration: '06:40', bvid: 'BV1xh4y147Xa', page: 2 }
        ],
        'nanle-mulian-opera': [
            { title: '目连戏跨地域比较：剧种简介', duration: '09:57', bvid: 'BV16s411678W', page: 23 },
            { title: '目连戏跨地域比较：传统折子戏', duration: '06:12', bvid: 'BV16s411678W', page: 25 }
        ]
    };

    function escapeSvgText(value) {
        return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function makeIllustratedCover(spec) {
        var colors = {
            '传统手工艺': ['#8f2d20', '#d9a441', '#f7edcf'],
            '传统音乐': ['#315c55', '#c59a52', '#f3ead2'],
            '传统舞蹈': ['#7d3248', '#db9f55', '#f9e8cf'],
            '传统戏剧': ['#4b315e', '#c9854f', '#f6e8d5']
        }[spec.category];
        var label = escapeSvgText(spec.title);
        var project = escapeSvgText(spec.project);
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">' +
            '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="' + colors[0] + '"/><stop offset="1" stop-color="' + colors[1] + '"/></linearGradient><pattern id="p" width="44" height="44" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="2" fill="' + colors[2] + '" opacity=".22"/></pattern></defs>' +
            '<rect width="1200" height="720" fill="url(#g)"/><rect width="1200" height="720" fill="url(#p)"/>' +
            '<circle cx="940" cy="160" r="230" fill="none" stroke="' + colors[2] + '" stroke-width="3" opacity=".35"/><circle cx="940" cy="160" r="170" fill="none" stroke="' + colors[2] + '" stroke-width="2" opacity=".25"/>' +
            '<path d="M70 535 C250 430 375 630 560 520 S900 390 1130 520" fill="none" stroke="' + colors[2] + '" stroke-width="18" opacity=".22"/>' +
            '<text x="72" y="250" fill="' + colors[2] + '" font-size="72" font-weight="700" font-family="STKaiti,KaiTi,serif">' + label + '</text>' +
            '<text x="76" y="322" fill="' + colors[2] + '" font-size="30" font-family="Microsoft YaHei,sans-serif" opacity=".9">' + project + '</text>' +
            '<text x="76" y="620" fill="' + colors[2] + '" font-size="24" font-family="Microsoft YaHei,sans-serif" opacity=".75">非遗文化 · 入门课程</text></svg>';
        return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
    }

    function makeCourse(spec, index) {
        var videos = supplementalVideos[spec.id];
        var intro = [
            spec.summary + '课程以文化背景、代表性特征和基础实践为主线，帮助初学者建立准确的观察框架。',
            '前两节选用可直接播放的真实公开影像，分别聚焦“' + spec.topics[0] + '”与“' + spec.topics[1] + '”；后续六节保持锁定状态，依次深入材料、动作、声腔、程式和综合赏析。'
        ];
        var course = {
            id: spec.id,
            title: spec.title,
            category: spec.category,
            level: '初级',
            rating: (4.7 + (index % 3) * 0.1).toFixed(1),
            learners: 420 + index * 37,
            image: spec.cover || makeIllustratedCover(spec),
            imageSource: spec.cover ? '国家图书馆对应人物记录影像' : '站内非遗课程插画',
            summary: spec.summary,
            intro: intro,
            topics: spec.topics,
            master: {
                name: spec.masterName,
                badge: '国家级代表性传承人',
                project: spec.project,
                sourceLabel: spec.sourceLabel,
                sourceUrl: spec.sourceUrl,
                intro: spec.bio,
                photo: spec.photo || ''
            },
            lessons: [
                { title: videos[0].title, duration: videos[0].duration, bvid: videos[0].bvid, page: videos[0].page, description: '通过真实公开影像认识' + spec.topics[0] + '，建立项目背景、术语和观看方法。' },
                { title: videos[1].title, duration: videos[1].duration, bvid: videos[1].bvid, page: videos[1].page, description: '围绕' + spec.topics[1] + '观察真实技艺或表演，在案例中理解项目的基本特征。' }
            ].concat(spec.outline.map(function (title, lessonIndex) {
                return { title: title, duration: ['08:00', '09:00', '10:00', '11:00', '10:00', '12:00'][lessonIndex], locked: true };
            })),
            quiz: [
                { question: '“' + spec.title + '”课程对应的非遗项目是？', options: [spec.project, '古琴艺术', '昆曲', '蔚县剪纸'], answer: 0, explanation: '本课程围绕“' + spec.project + '”展开。' },
                { question: '本课程人物资料介绍的是哪位代表性传承人？', options: [spec.masterName, '周淑英', '龚一', '蔡正仁'], answer: 0, explanation: spec.masterName + '是课程所介绍项目的国家级代表性传承人。' },
                { question: '资料显示，该项目在本课程中对应的主要地区是？', options: [spec.region, '北京市海淀区', '海南省三亚市', '黑龙江省漠河市'], answer: 0, explanation: '课程资料所列项目地区为' + spec.region + '。' },
                { question: '下列哪一项是本课程前两节的核心关键词？', options: [spec.topics[0], '工业流水线', '网络游戏关卡', '现代广告排版'], answer: 0, explanation: spec.topics[0] + '是理解本项目的重要入门线索。' },
                { question: '初学非遗技艺时，更合适的学习方式是？', options: ['先理解文化语境，再分步骤观察和练习', '脱离项目背景随意改写', '忽略安全直接追求高难度', '只记结论不观察过程'], answer: 0, explanation: '文化理解、分步观察和安全练习，是负责任地学习非遗项目的基本方法。' }
            ]
        };
        return course;
    }

    supplementalCourses.forEach(function (spec, index) {
        courses.push(makeCourse(spec, index));
    });

    courses.forEach(function (course) {
        course.topics = course.topics || [course.lessons[0].title, course.lessons[1].title, course.category + '文化'];
    });

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

    window.getCultureCoinBalance = function () {
        var raw = localStorage.getItem('feiyiCultureCoins');
        if (raw === null || raw === '') return 520;
        var saved = Number(raw);
        return Number.isFinite(saved) && saved >= 0 ? saved : 520;
    };

    window.awardCourseCoins = function (courseId, amount) {
        var rewarded;
        try { rewarded = JSON.parse(localStorage.getItem('feiyiRewardedCourses') || '[]'); }
        catch (error) { rewarded = []; }
        if (rewarded.indexOf(courseId) !== -1) return { awarded: false, amount: 0, balance: window.getCultureCoinBalance() };
        var reward = Number(amount) || 20;
        var balance = window.getCultureCoinBalance() + reward;
        rewarded.push(courseId);
        localStorage.setItem('feiyiRewardedCourses', JSON.stringify(rewarded));
        localStorage.setItem('feiyiCultureCoins', String(balance));
        return { awarded: true, amount: reward, balance: balance };
    };
})();
