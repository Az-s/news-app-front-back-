create table if not exists news
(
    id          int auto_increment
        primary key,
    title       varchar(255) not null,
    description text         not null,
    image       varchar(255) null,
    time        timestamp    not null
);

create table if not exists comments
(
    id      int auto_increment
        primary key,
    news_id int          not null,
    author  varchar(255) null,
    comment text         not null,
    constraint comments_news_id_fk
        foreign key (news_id) references news (id)
            on update cascade
);


