export default {
    User: [
        {
            user_id: 1,
            name: 'lelana',
            created_at: '2020-01-01 11:42:11'
        },
        {
            user_id: 2,
            name: 'joe',
            created_at: '2019-12-30 09:32:12'
        },
        {
            user_id: 3,
            name: 'jenny',
            created_at: '2020-02-15 20:01:23'
        }
    ],
    Content: [
        {
            content_id: 1,
            user_id: 1,
            title: 'lelana planner',
            context: '미정입니다.',
            created_at: '2020-01-07 10:43:03',
            updated_all: null
        },
        {
            content_id: 2,
            user_id: 3,
            title: 'joe planner',
            context: 'go to school',
            created_at: '2020-03-01 08:01:53',
            updated_all: null
        },
        {
            content_id: 3,
            user_id: 2,
            title: 'jenny planner',
            context: 'going on a trip',
            created_at: '2020-02-20 23:34:12',
            updated_all: null
        }
    ],
    Comment: [
        {
            comment_id: 1,
            user_id: 1,
            content_id: 3,
            context: 'good~!',
            created_at: '2020-01-07 11:00:32',
            updated_at: null
        },
        {
            comment_id: 2,
            user_id: 3,
            content_id: 3,
            context: 'I hope you study hard',
            created_at: '2020-03-01 10:54:23',
            updated_at: null
        },
        {
            comment_id: 3,
            user_id: 2,
            content_id: 1,
            context: 'Have your good trip',
            created_at: '2020-02-21 08:23:54',
            updated_at: null
        }
    ],
    SubComment: [
        {
            subcomment_id: 1,
            comment_id: 3,
            user_id: 1,
            context: 'Thank you:)',
            created_at: '2020-01-07 11:30:08',
            updated_at: null
        }
    ]
}