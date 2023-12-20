/* eslint-disable react-refresh/only-export-components */
/** @jsx sqlx */

export const SelectUsersWithStatusOne = () => (
  <select from="users">
    <where>
      <column name="status">
        <eq>
          <raw>1</raw>
        </eq>
      </column>
    </where>
  </select>
);
export const SelectSalesEmployeesWithSalaryRange = () => (
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

export const SelectOrdersOnSpecificDate = () => (
  <select from="orders">
    <column name="order_id" />
    <column name="customer_name" />
    <where>
      <column name="order_date">
        <eq>
          <raw>'2023-01-01'</raw>
        </eq>
      </column>
    </where>
  </select>
);

export const sqlxs = [
  SelectUsersWithStatusOne,
  SelectSalesEmployeesWithSalaryRange,
  SelectOrdersOnSpecificDate,
];
