create table usr(
email text not null,
usr text not null,
kat text,
phn text not null
);
create unique index usr_phn on usr(phn);

