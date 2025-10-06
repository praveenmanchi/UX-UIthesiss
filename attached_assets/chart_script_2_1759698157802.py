import pandas as pd
import plotly.graph_objects as go

# Load the data
df = pd.read_csv("ux_ui_tools_evolution.csv")

# Create figure with secondary y-axis
fig = go.Figure()

# Add bar chart for UX professionals using each tool
fig.add_trace(
    go.Bar(
        x=df['period'],
        y=df['ux_professionals_using'],
        name='Users',
        marker_color='#1FB8CD',
        yaxis='y',
        hovertemplate='<b>%{x}</b><br>Users: %{y:,.0f}<extra></extra>'
    )
)

# Add line chart for collaboration capability
fig.add_trace(
    go.Scatter(
        x=df['period'],
        y=df['collaboration_capability'],
        mode='lines+markers',
        name='Collab %',
        line=dict(color='#DB4545', width=3),
        marker=dict(size=8, color='#DB4545'),
        yaxis='y2',
        hovertemplate='<b>%{x}</b><br>Collaboration: %{y}%<extra></extra>'
    )
)

# Update layout with dual y-axes
fig.update_layout(
    title='UX Tool Evolution & User Growth',
    xaxis_title='Era',
    yaxis=dict(
        title='Users',
        side='left',
        tickformat='.0s'  # This will show 600k instead of 600000
    ),
    yaxis2=dict(
        title='Collab %',
        side='right',
        overlaying='y',
        ticksuffix='%'
    ),
    legend=dict(
        orientation='h',
        yanchor='bottom',
        y=1.05,
        xanchor='center',
        x=0.5
    )
)

# Update traces for better visual appeal
fig.update_traces(cliponaxis=False)

# Save the chart as both PNG and SVG
fig.write_image("chart.png")
fig.write_image("chart.svg", format="svg")

print("Chart saved successfully as chart.png and chart.svg")