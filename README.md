# Final Product:

<img width="442" alt="Screen Shot 2022-06-15 at 6 46 17 PM" src="https://user-images.githubusercontent.com/52838675/176287901-04c1d102-669f-4b18-a1ce-8f1e72fb9316.png">

<img width="1113" alt="Screen Shot 2022-06-15 at 5 54 26 PM" src="https://user-images.githubusercontent.com/52838675/176287920-46692bb0-9382-4f9c-a118-16040af2219c.png">


# What I did:

1. I created a `DataGrid` that functioned as a table, using columns as the meta-data/formatting. 
2. The table has: `ID`, `First Name`, `Last Name`, `Email`, `Created at` fields.
3. The table is: sortable, filterable, can have collapsed columns, and change the number of entries per page (default: 100).
4. The table is hyper-linked to a patient individual view.
5. Then, I created a patient view, which contains a `Card` with all the data, and allows for quick back navigation.
6. The patient view has a linkable email, in addition to the sex, full name, and a formatted date that are present in the table.
8. For styling, I used css.
9. I created a `util.ts` file for helper functions, and a `data.ts` file for an async api call function. 

This is fairly mobile friendly, with the only downside being that the table isn't optimized for narrow screen, and would require scrolling. 

If I were working on this longer term I would:

1. Improve the `PatientView.tsx` file. This file has some code repetition, and could use loops/maps or other methods to reduce code.
2. Improve some of the styling, or add more color.
3. I would reconsider replacing `Card` with a different component. 
4. Look at how to make the runtime better, as some of the api calls are slow.
5. Cleanup typing. I did not have time to define a type for the dataset, which made the typing awkward and resulted in too many 'any' to avoid type incopatibility. 
6. Create more interfaces, take greater advantage of typescript. 
