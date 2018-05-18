create table adr(
phn text not null,
ln1 text,
ln2 text,
city text,
sta text,
zip text not null
);
create unique index adr_phn on adr(phn);


