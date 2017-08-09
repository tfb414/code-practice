## PostGres

we're going to learn to use postgres from the command line
createdb <db name>

double click on it, it will pull up another window

-p#### is the port it is listening to

-must end with a semi-colon
-do not hae to be all caps that just common convention

##### Backup

pg_dumb "db-name" > database.sql

##### DROP TABLE members

##### Import it in

cat database.sql | psql

### from terminal type psql

ctrl-d

\c "db name" - connects to this database


\dt

it means describe tables

\dt cd.* - this give you a list of tables under tables

q to quit or ctrl d

#####as
select firstname as fname, surname as lname from cd.members;

"select firstname as fname" creates a table with this as the first column 
"surname as lname" adds this as another column

#####where

select * from cd.members where memid in(1, 2, 3);
select * from cd.members where joindate = '2012-09-01';

#####Sub Queries

select *
    from cd.members
    where 
    memid in (
        select memid from cd.members where joindate >= '2012-09-01'
    );

##### Where Like

select *
    from cd.members
    where
    surname like '%J';

select *
    from cd.members
    where
    surname like '%z%';

select *
    from cd.members
    where
    surname ilike '%z%'; 

    ^ this does a string search for upper or lower case "ilike" instead of "like"

##### Sorting and Limit
    select *
        from cd.members
        where joindate >= '2012-09-01'
    order by zipcode
    asc; for ascending

    desc; for descending

    select *
        from cd.members
        where joindate >= '2012-09-01'
    LIMIT 10;

    select *
        from cd.members
        where
        joindate = (
            select max(joindate) from cd.members
        );

        max finds the largest value

    top 10 would be
    select *
        from cd.members
        order by joindate
        desc
        limit 10;

##### Joins

    you create a virtual table then you query that


