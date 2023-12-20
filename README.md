# React + SQLX

A 1$ library for writing SQL queries in JSX-like syntax.

## Example

```ts
export default function main() {
  return (
    <select from="employees">
      <where>
        <column name="department">
          <eq>
            <raw>'Sales'</raw>
          </eq>
        </column>
        <and>
          <column name="salary">
            <in>
              <parenthesis>
                <raw>30000</raw>
                <raw>50000</raw>
              </parenthesis>
            </in>
          </column>
        </and>
      </where>
    </select>
  );
}
```

Output:

```sql
SELECT * FROM employees WHERE department = 'Sales' AND salary IN (30000, 50000)
```
