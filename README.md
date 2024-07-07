# Challenge Interactive Dashboard

## Getting Started

Make sure you use node.js 20 and npm 10.

First, install the dependencies

```bash
npm install
```

Then, run the application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Senior Front-End Test

### Objective

Develop an interactive dashboard that displays a chart and pivot table using data from multiple JSON sources. **React** should be used as a framework.

### Technical requirements

1. Framework: Use React.
2. Language: Use TypeScript if necessary.
3. Repository: Create a repository on GitHub for the project and link with us upon delivery.

### Rating criteria

1. Functionality:

   - The dashboard must allow the selection of different data sources and the application
     of the three viewing options correctly.

2. Code Quality:

   - The code must be clean, well structured, and follow good security practices development.

3. User Interface:

   - The interface must be intuitive and visually pleasing.

4. Documentation:
   - Include a README in the repository with clear instructions on how to run the project.

### Additional Instructions

1. Data Combination:

   - Make sure the interface allows fluid switching between different data sources.

2. Interactivity:

   - The table and graph must be updated in real time as the user does the selections in the visualization or data source options.

### Delivery

Submit the GitHub repository link containing the project by the stipulated date.

### Test Description

1. Data Sources:

   - We will make 5 different data sources available in JSON format.
   - Each data source will have its own structure, but they will all allow sum/total and drill-down operations.

2. Data Source Selection:

   - The user must have a combo box to view the data sources available and select which one you want to detail.

3. Required Views:

   - First Option (Field for Sum/Totalization): The user can choose which field of data they want to add or total.
   - Second Option (Value Detail): The user must select a field to detail the values ​​that will be added on the Y axis of the table and represented by bars on the graph.
   - Third Option (Second Dimension for Detailing): The user can select an additional field to detail the data on the X axis of the table and divide the bars by color in the graph.

4. Interface Examples:

- Example 1: Totalization of the numerical attribute “Valor” detailed by the “UF” attribute in the first visualization dimension.

  - Pivot table view:
    ![image](https://github.com/hebertpaziam/challenge-interactive-dashboard/assets/18744762/5d36ab11-dcc4-4744-a73b-20f64bb7741b)

  - Chart view:
    ![image](https://github.com/hebertpaziam/challenge-interactive-dashboard/assets/18744762/90251c14-3eb0-4d8a-861c-6c43782fa1e7)

- Example 2: Totalization of the numerical attribute "Total" detailed by the attributes "Ano" and
  "Beneficio" in the first and second dimension of detail,
  respectively.

  - Pivot table view:
    ![image](https://github.com/hebertpaziam/challenge-interactive-dashboard/assets/18744762/a13c8147-b3d6-41b3-952f-84f181c4b29a)

  - Chart view:
    ![image](https://github.com/hebertpaziam/challenge-interactive-dashboard/assets/18744762/6823a9f6-fa12-42ec-8ab3-04a99a14c234)
