const ts = {
    py : 'Python',
    js : 'JavaScript',
    ts : 'TypeScript',
    java : 'Java',
    kt : 'Kotlin',
    html : 'HTML',
    css : 'CSS',
    react : 'React',
    next : 'Next.js',
    node : 'Node.js',
    express : 'Express',
    nest : 'Nest.js',
    postgresql  : 'PostgreSql',
    mongodb : 'Mongo DB',
    prisma : 'Prisma',
    sequelize : 'Sequelize',
    sanity : 'Sanity',
}




export const projects = 
[
    {   
        id : 1,
        preview : false,
        featured : true,
        title : 'D.I.S.O.P',
        date : 'Jun 2023',
        domain : 'Web Development',
        description : 'A web application for monitoring and supervising daily oil production produced across all Algerian national territories.',
        live : '',
        code : '',
        previewImage : '/p1/cover.jpg',
        screens : [
            '', ''
        ],
        techStack : ['JavaScript', 'React', 'Node.js', 'Express', 'PostgreSql', 'sequelize', 'Tailwind']
    },

    {
        id : 2,
        preview : true,
        featured : true,
        title : "Today's word",
        date : 'Jan 2022',
        domain : 'Web Development',
        description : 'Chrome Extension that helps users learn new words and expand their vocabulary.',
        live : '',
        code : 'https://github.com/moonaimghouali/Today-s-word-',
        previewImage : '/p2/cover.png',
        screens : [
            '/p2/img1.png', '/p2/img2.png'
        ],
        techStack : [ts.html, ts.css, ts.js, 'Chrome Extensions']
    },

    {
        id : 3,
        preview : false,
        featured : false,
        title : 'Pharma.app',
        date : 'Jul 2023',
        domain : 'Mobile Development',
        description : 'Native android mobile app that helps users locate the nearst pharmacies and order medicine.',
        live : 'https://drive.google.com/file/d/1PVhUDhfRSsRF1Ef4VQ86yuiCWMmjTZN7/view?usp=drive_link',
        code : 'https://github.com/moonaimghouali/pharma.app',
        previewImage : '/p3/cover.jpg',
        screens : [
        ],
        techStack : ['Android', ts.kt, ts.js, ts.node, ts.express, ]
    },
];