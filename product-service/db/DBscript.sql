create table products (
	id uuid not null default uuid_generate_v4() primary key,
	title text not null,
	description text,
	price integer
);

create extension if not exists "uuid-ossp";

create table stocks (
	product_id uuid not null references products(id),
	"count" integer
);



insert into products(title, description , price) values ('Vinsant with Bae Tshirt','Relaxed fit t-shirt for any look. Basic White', 6500);
insert into products(title, description , price) values ('Mike Tyson Tshirt','Relaxed fit t-shirt for sportsmens', 4500);
insert into products(title, description , price) values ('Just white one','Great for any look', 3500);


insert into stocks(product_id, count) values ('9ca70f29-e97b-4da4-b3a2-af2051940099', 15);
insert into stocks(product_id, count) values ('4b64a07d-3661-408c-9ab3-bea19a37c727', 10);
insert into stocks(product_id, count) values ('46a5c30a-b280-4da1-9b01-f1d3b32587e1', 5);