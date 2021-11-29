SELECT CONCAT(t1.nome, ' ', t2.nome)
FROM   empregados t1
JOIN   empregados t2
ON      t1.id != t2.id
WHERE   t1.salario < t2.salario

        